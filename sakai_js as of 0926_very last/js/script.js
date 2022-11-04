'use strict';


// ---------- countdown ---------------------------------------
function countdown(due) {
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hour = Math.floor(rest / 1000 / 60 / 60) % 24;
  const day = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [day, hour, min, sec];
  return count;
}


// ---------- slide show ---------------------------------------

