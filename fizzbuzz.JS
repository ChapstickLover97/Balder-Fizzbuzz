let results = [];

const fizzbuzz = (n) => {
  for (let i = 0; i < results.length; i++); {
  	if (n % 15 == 0) results.push('fizzbuzz');
  	else if (n % 3 == 0) results.push('fizz');
  	else if (n % 5 == 0) results.push('buzz');
  	else results.push (n);
  };
};

fizzbuzz(16);
console.log(results);