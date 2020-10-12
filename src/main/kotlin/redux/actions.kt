import redux.RAction

//class zxc() : RAction

class ChangeQuestion(
    val newID:Int,
    val groupIndex:Int,
    val questionIndex:Int,
    val newTitle:String,
    val newQuestion:String,
    val newType:String,
    val newCase:Boolean ) : RAction

class AddAnswerVariant(
    val groupIndex:Int,
    val questionIndex:Int,
    val newAnswer:String,
    val newFraction:Int,
    val newFeedback:String ) : RAction

class RemoveAnswerVariant(
    val groupIndex:Int,
    val questionIndex:Int,
    val answerIndex:Int ) : RAction

class ChangeAnswerVariant(
        val groupIndex:Int,
        val questionIndex:Int,
        val answerIndex:Int,
        val newAnswer:String,
        val newFraction:Int,
        val newFeedback:String) : RAction

class DeleteQuestion(
        val groupIndex:Int,
        val questionIndex:Int ) : RAction

class AddQuestion(
        val questionIndex:Int,
        val newID:Int,
        val newTitle:String,
        val newQuestion:String,
        val newType:String,
        val newUseCase:Boolean) : RAction

class CurrentQuestionToggleEdit() : RAction

//class CurrentQuestionSetEdit(val newEditable:Boolean) : RAction

class QuestionListToggleEdit() : RAction

class QuestionGroupToggleEdit() : RAction

class AddQuestionGroup(val newTitle:String) : RAction

class RemoveQuestionGroup(val questionGroupId:Int) : RAction

class EditQuestionGroup(val questionGroupId:Int, val newTitle:String) : RAction

//class QuestionListSetEdit(val newEditable:Boolean) : RAction