package component

import AddQuestion
import DeleteQuestion
import QuestionListToggleEdit
import data.*
import hoc.withDisplayName
import kotlinx.html.InputType
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent
import react.router.dom.navLink
import store

interface GroupProps: RProps {
	var questions:QuestionGroup
}

fun currentGroup(header: String, index:Int) =
	functionalComponent<GroupProps> { props ->
		val types = listOf("shortanswer", "numerical")

		val (typeIndex, setType) = useState(0)

		val (case, setCase) = useState(false)
		div() {

			div() {
				h2 { +header }
				button {
					attrs.onClickFunction = questionListToggleEdit()
					+"Скрыть\\показать элементы редактирования"
				}
				table(classes = "fl-table") {
					thead {
						tr {
							th{
								+"id"
							}
							th {
								+"Заголовок"
							}
							th {
								+"Вопрос"
							}
							th {
								+"Тип вопроса"
							}
							th {
								+"Строгий режим"
							}
							th {
								+"Ссылка"
							}
							if(store.getState().questionListEditable) // если не была нажата кнопка редактирования, то эта ячейка отрисовываться не будет
								th {
									+"Удалить"
								}
						}
					}
					tbody {
						props.questions.questions.forEachIndexed{ questionIndex, it ->
							tr{
								td{
									+"${it.id}"
								}
								td{
									+it.title
								}
								td{
									+it.question
								}
								td{
									+it.type
								}
								td{
									+"${it.useCase}"
								}
								td{
									navLink("/question_groups/group_$index/$questionIndex"){
										+"Подробнее >>"
									}
								}
								if(store.getState().questionListEditable)
									td{
										button(classes = "btn-2") {
											+"Удалить"
											attrs.onClickFunction = deleteQuestion(index, questionIndex)
										}
									}
							}

						}

						if(store.getState().questionListEditable)
							tr{
								td{
									input(InputType.number) {
										attrs.placeholder = "id"
										attrs.id = "add-id"
									}
								}
								td{
									input(InputType.text) {
										attrs.placeholder = "title"
										attrs.id = "add-title"
									}
								}
								td{
									input(InputType.text) {
										attrs.placeholder = "question"
										attrs.id = "add-question"
									}
								}
								td{
									button(classes = "btn-2"){
										+types[typeIndex]
										attrs.onClickFunction = {
											setType(if(typeIndex == 0) 1 else 0)
										}
									}
								}
								td{
									button(classes = "btn-2"){
										+"$case"
										attrs.onClickFunction = {
											setCase(!case)
										}
									}
								}
								td{
									button {
										+"Добавить"
										attrs.onClickFunction = addQuestion(index, types[typeIndex], case)
									}
								}
							}
					}
				}
			}
		}
	}

fun addQuestion(
	questionGroupIndex:Int,
	newType:String,
	newUseCase:Boolean):(Event) -> Unit{
	return {
		store.dispatch(AddQuestion(
			questionGroupIndex,
			getInputValue("#add-id",(store.getState().questionGroup[questionGroupIndex].questions.last().id+1).toString()).toInt(),
			getInputValue("#add-title"),
			getInputValue("#add-question"),
			newType,
			newUseCase
		))
	}
}

fun deleteQuestion(groupIndex:Int, questionIndex:Int):(Event) -> Unit{
	return {
		store.dispatch(DeleteQuestion(groupIndex, questionIndex))
	}
}

fun questionListToggleEdit():(Event) -> Unit{
	return {
		store.dispatch(QuestionListToggleEdit())
	}
}

fun RBuilder.currentGroupFC(
		questions: QuestionGroup,
		header: String,
		indexGroup:Int
) = child(withDisplayName(header, currentGroup(header, indexGroup))){attrs.questions = questions}
