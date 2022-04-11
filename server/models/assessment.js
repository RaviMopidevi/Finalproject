const assessment = [
  {
    assessmentId: 43233,
    userId: 12345,
    bmi: 20,
  },
  {
    assessmentId: 22222,
    userId: 55555,
    bmi: 30,
  },
  {
    assessmentId: 93999,
    userId: 34212,
    bmi: 17,
  }
]

let getAllBMI = () => assessment.map(a => a.bmi);

function getAllBMI2() {
  const onlyBMIs = assessment.map(a => a.bmi);
  return onlyBMIs;
}


let getHealthState = (userId) => {
  let bmi = getBMI(userId);
  return calculateHealth(bmi)
};

function calculateHealth(bmi) {
  let healthState;
  if(bmi < 18.5) {
    healthState = "underweight";
  } else if(bmi <= 25){
    healthState = "normal";
  } else if(bmi <= 30) {
    healthState = "overweight";
  } else {
    healthState = "obese";
  }
  return healthState;
}

module.exports = { getAllBMI, calculateHealth };
