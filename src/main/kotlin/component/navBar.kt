package component

import data.types
import kotlinx.html.InputType
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLUListElement
import react.*
import react.dom.*
import react.router.dom.navLink
import kotlin.browser.document

interface NavBarProps : RProps

val navBarFC =
        functionalComponent<NavBarProps> {
            val (visible, setVisible) = useState(true)

            nav("nav"){
                input( classes = "nav__trigger-input", type = InputType.checkBox ) {
                    attrs.id = "trigger"
                }
                label( classes = "nav__trigger-finger" ) {
                    attrs.htmlFor = "trigger"; span{+""}
                    attrs.onClickFunction = {//при нажатии меняется состояние этого компонента, что приводит к изменению прозначности элемента с классом "nav__list"
                        setVisible(!visible)
                        (document.querySelector(".nav__list") as HTMLUListElement).style.setProperty("opacity", if(visible) ".85" else "0")
                    }
                }
                ul("nav__list") {

                    li("nav__item") {
                        navLink(className = "nav__link", to = "") {
                            span {
                                +"домой"
                            }
                        }
                    }
                    li("nav__item") {
                        navLink(className = "nav__link", to = "/question_groups") {
                            span {
                                +"Список групп вопросов"
                            }
                        }
                    }
                    li("nav__item center") {
                        navLink("/${types[0]}"){
                            span{ +"Список вопросов типа \"Short answer\"" }
                        }
                    }
                    li("nav__item center") {
                        navLink("/${types[1]}"){
                            span{ +"Список вопросов типа \"Numerical response\"" }
                        }
                    }

                }
            }
        }

fun RBuilder.NavBar() = child(navBarFC) { }