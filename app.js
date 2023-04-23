const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  let score;

  if (strokes == 1) {
    score = names[0];
  } else if (strokes <= par - 2) {
    score = names[1];
  } else if (strokes == par - 1) {
    score = names[2];
  } else if (strokes == par) {
    score = names[3];
  } else if (strokes == par + 1) {
    score = names[4];
  } else if (strokes == par + 2) {
    score = names[5];
  } else if (strokes >= par + 3) {
    score = names[6];
  }

  return score;
}

golfScore(5, 4);
