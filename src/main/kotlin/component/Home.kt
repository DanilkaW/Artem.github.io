package component

import data.*
import hoc.withDisplayName
import react.*
import react.dom.*
import react.functionalComponent
import react.router.dom.navLink

interface HomeProps: RProps {
	var questionGroups:MutableList<QuestionGroup>
	var numericList:MutableList<IndicesWithQuestion>
	var shortList:MutableList<IndicesWithQuestion>
}

fun Home(header: String) =
	functionalComponent<HomeProps> { props ->
		div("home-container"){
			div("left"){
				navLink("/question_groups") { h1 { +header } }
				ul("p-has-headers main") {
					props.questionGroups.forEachIndexed { questionGroupIndex, questionGroup ->
						li {
							h2("header") { navLink("/question_groups/group_$questionGroupIndex") { +questionGroup.title } }
							ul("p-has-headers") {
								questionGroup.questions.forEachIndexed { questionIndex, question ->
									li("header") {
										li {
											h3 {
												navLink("/question_groups/group_$questionGroupIndex/$questionIndex") {
													+question.title
												}
											}
										}
										li("header") {
											i { +"id: " }
											+"${question.id}"
										}

										li("header ") {
											i { +"question:" }
											+question.question
										}
										li("header") {
											i { +"type: " }
											+question.type
										}
										li("header") {
											i { +"useCase: " }
											+"${question.useCase}"
										}
										li("header") {
											h3 { +"Answers" }
											ul {
												question.answers.forEach { answer ->
													li {
														i { +"answer: " }
														+answer.answer
													}
													li {
														i { +"fraction: " }
														+"${answer.fraction}"
													}
													li {
														i { +"feedback: " }
														+answer.feedback
													}
													li { +"-------------------------" }
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			div("center"){
				navLink("/${types[1]}") { h1 { +"тип \"Numeric response\"" } }
				ul("p-has-headers main") {
					props.numericList.forEach {
						li{
							navLink("/question_groups/group_${it.questionGroupIndex}/${it.questionIndex}"){
								+"${it.question.title} >>>"
							}
						}
					}
				}
			}
			div("right"){
				navLink("/${types[0]}") { h1 { +"тип \"Short answer\"" } }
				ul("p-has-headers main") {
					props.shortList.forEach {
						li{
							navLink("/question_groups/group_${it.questionGroupIndex}/${it.questionIndex}"){
								+"${it.question.title} >>>"
							}
						}
					}
				}
			}
		}
	}


fun RBuilder.HomeFC(
		header: String,
		questionGroups:MutableList<QuestionGroup>,
		numericList:MutableList<IndicesWithQuestion>,
		shortList:MutableList<IndicesWithQuestion>
) = child(
		withDisplayName(header, Home(header))
){
	attrs.questionGroups = questionGroups
	attrs.numericList = numericList
	attrs.shortList = shortList
}

