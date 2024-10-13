window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  nrzNotif('Great job! Thats correct. Plants use sunlight to create energy.', 'success', 7000);

}

window.Script2 = function()
{
  nrzNotif('Welcome to Lesson 3: Introduction to Photosynthesis', 'info', 7000);

}

window.Script3 = function()
{
  nrzNotif('Not quite. Remember, chlorophyll is key in capturing sunlight. Try again!', 'error', 7000);

}

window.Script4 = function()
{
  nrzNotif('5 minutes remaining in this section. Please finish up your responses.', 'warning', 7000);

}

window.Script5 = function()
{
  nrzNotif('Youre about to begin a 10-minute timed quiz. Are you ready to start?', 'question', 0);

}

};
