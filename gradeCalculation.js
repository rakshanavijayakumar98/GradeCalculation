function studentScore(score) {
switch (true) {
    case (score >81 && score <= 100):
        console.log("Grade A")
    break;
    case (score > 71 && score <= 80):
        console.log("Grade B")
    break;  
    case (score > 61 && score <= 70):
        console.log("Grade C")
    break;
    case (score > 51 && score <= 60):
        console.log("Grade D")
    break;
    case (score > 35 && score <= 50):
        console.log("Grade E")
    break;
    default:
        console.log("Fail")
    break;
    }
}
studentScore(37)
