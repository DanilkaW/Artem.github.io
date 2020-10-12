package component

import AddQuestionGroup
import EditQuestionGroup
import QuestionGroupToggleEdit
import RemoveQuestionGroup
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

interface GroupListProps: RProps {
    var groups:MutableList<QuestionGroup>
}
fun groupList(header: String) =
    functionalComponent<GroupListProps> { props ->

        val (lastIndex, setLastIndex) = useState(props.groups.size)

        div("container"){

            h2 { + header }
            button {
                attrs.onClickFunction = toggleEditQuestionGroup()

                +"Скрыть\\показать элементы редактирования"
            }
            table(classes = "fl-table") {
                thead {
                    tr {
                        th {
                            +"id"
                        }
                        th {
                            +"Название"
                        }
                        th {
                            +"Количество вопросов"
                        }
                        th {
                            +"Ссылка"
                        }
                        if(store.getState().questionGroupEditable)
                            th{
                                +"Изменить"
                            }
                        if(store.getState().questionGroupEditable)
                            th{
                                +"Удалить"
                            }
                    }
                }
                tbody {
                    props.groups.forEachIndexed { index, it ->
                        tr {
                            td {
                                +"$index"
                            }
                            if(store.getState().questionGroupEditable)
                                td{
                                    input(InputType.text) {
                                        attrs.placeholder = it.title
                                        attrs.id = "question_group-edit-title-$index"
                                    }
                                }
                            else
                                td {
                                    +it.title
                                }
                            td {
                                +"${it.questions.size}"
                            }
                            td{
                                navLink("/question_groups/group_$index"){
                                    +"Подробнее >>"
                                }
                            }
                            if(store.getState().questionGroupEditable)
                                td{
                                    button {
                                        +"Изменить"
                                        attrs.onClickFunction = editQuestionGroup(index)
                                    }
                                }
                            if(store.getState().questionGroupEditable)
                                td{
                                    button {
                                        +"Удалить"
                                        attrs.onClickFunction = removeQuestionGroup(index)
                                    }
                                }
                        }
                    }
                    if(store.getState().questionGroupEditable)
                        tr{
                            td{
                                +"$lastIndex"
                            }
                            td {
                                input(InputType.text){
                                    attrs.placeholder = "title"
                                    attrs.id = "question_group-new-title"
                                }
                            }
                            td {
                                +"0"
                            }
                            td{
                                button {
                                    +"Добавить"
                                    attrs.onClickFunction = addQuestionGroup()
                                }
                            }
                        }
                }
            }
        }
    }

fun removeQuestionGroup(groupIndex:Int):(Event) -> Unit{
    return {
        store.dispatch(RemoveQuestionGroup(
                groupIndex
        ))
    }
}

fun editQuestionGroup(groupIndex:Int):(Event) -> Unit{
    return {
        store.dispatch(EditQuestionGroup(
                groupIndex,
                getInputValue("#question_group-edit-title-$groupIndex")
        ))
    }
}

fun addQuestionGroup():(Event) -> Unit{
    return{
        store.dispatch(AddQuestionGroup(
                getInputValue("#question_group-new-title")
        ))
    }
}
fun toggleEditQuestionGroup():(Event) -> Unit{
    return {
        store.dispatch(QuestionGroupToggleEdit())
    }
}
fun RBuilder.groupListFC(
        groups:MutableList<QuestionGroup>,
        header:String
) = child(
    withDisplayName(header, groupList(header))
){attrs.groups = groups}

