package component

import data.*
import hoc.withDisplayName
import react.*
import react.dom.*
import react.router.dom.*
import redux.*

class IndicesWithQuestion(val question:Question, val questionGroupIndex:Int, val questionIndex:Int )/* Класс для группировки индексов вопроса и самого вопроса,
                                                                                                    нужен для того, чтобы в компонентах renderByTypesFC и Home работали ссылки */
interface RootProps : RProps {
	var store: Store<State, RAction, WrapperAction>
}

fun root() = functionalComponent<RootProps> { props ->
		header {
			NavBar()
		}

		switch {
			route("/question_groups",
					exact = true,
					render = {
						groupListFC(props.store.getState().questionGroup, "Список групп вопросов")//Компонент со списком всех групп вопросов
					}
			)
			route("/${types[0]}",
					exact = true,
					render = {
						renderByTypesFC(getQuestionsByType(props.store.getState().questionGroup, types[0]), "Short answer")// Компонент со всеми вопросами типа shortanswer
					}
			)
			route("/${types[1]}",
					exact = true,
					render = {
						renderByTypesFC(getQuestionsByType(props.store.getState().questionGroup, types[1]), "Number response")// Компонент со всеми вопросами типа numeric
					}
			)

			props.store.getState().questionGroup.forEachIndexed { questionGroupIndex, questionGroup ->
				route("/question_groups/group_$questionGroupIndex",
					exact = true,
					render = {
						currentGroupFC(questionGroup, questionGroup.title, questionGroupIndex)//компонент отдельной группы вопросов
					}
				)
				questionGroup.questions.forEachIndexed { index, it ->
					route("/question_groups/group_$questionGroupIndex/$index",
						exact = true,
						render = {
							currentQuestionFC(it, it.title, questionGroupIndex, index)//компонент отдельного вопроса
						}
					)
				}
			}

			route("",
					exact = true,
					strict = true,
					render = {
						HomeFC("HOME",//Компонент стартовой страницы
							props.store.getState().questionGroup,getQuestionsByType(props.store.getState().questionGroup,
							types[1]),
							getQuestionsByType(props.store.getState().questionGroup,
							types[0]
						)
						)
					}
			)
		}
	}

fun getQuestionsByType(questionGroup:MutableList<QuestionGroup>, type:String):MutableList<IndicesWithQuestion>{// фильтрует список по вопросам и возвращает список экземпляров класса
	val temp = mutableListOf<IndicesWithQuestion>()                                                            // IndicesWithQuestion только с вопросами указанного типа
	questionGroup.forEachIndexed {questionGroupIndex, qg ->
		qg.questions.forEachIndexed {questionIndex, question ->
			if(question.type == type)
				temp.add(IndicesWithQuestion(question, questionGroupIndex, questionIndex))
		}
	}
	return temp
}

fun RBuilder.root(store: Store<State, RAction, WrapperAction>) =
		child(withDisplayName("Root", root())) {
			attrs.store = store
		}