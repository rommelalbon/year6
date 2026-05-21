function checkAnswer(inputId, expected, feedbackId){
 const value=document.getElementById(inputId).value.trim();
 const feedback=document.getElementById(feedbackId);
 feedback.innerHTML=value===expected?'✅ Correct':'❌ Incorrect';
}
