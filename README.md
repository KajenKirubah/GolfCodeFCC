# GolfCodeFCC
javascript solution to the free code camp golf scenario

In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	    Return
1	        "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"

Tests:

golfScore(4, 1) should return the string Hole-in-one!
Waiting:golfScore(4, 2) should return the string Eagle
Waiting:golfScore(5, 2) should return the string Eagle
Waiting:golfScore(4, 3) should return the string Birdie
Waiting:golfScore(4, 4) should return the string Par
Waiting:golfScore(1, 1) should return the string Hole-in-one!
Waiting:golfScore(5, 5) should return the string Par
Waiting:golfScore(4, 5) should return the string Bogey
Waiting:golfScore(4, 6) should return the string Double Bogey
Waiting:golfScore(4, 7) should return the string Go Home!
Waiting:golfScore(5, 9) should return the string Go Home!

Plan:

In golf, theres something called a hole.  This is a hole in the ground where you hit the ball into.  Each hole on a golf course has a specific difficulty, ie the average number of golf strokes to get the ball into the hole.  This is also called the "par".  A golfer takes a number of swings, and depending on how many hits it takes to get the ball in the hole, hes given a score, for ex "hole in one", or "birdie" or "eagle", etc etc.  

We create a function that takes in the par level for the hole, and the number of strokes the golfer took, and return the score.
