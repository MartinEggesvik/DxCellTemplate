export default {
  getEmployees() {
    return generateRandomEmployees(40); //List of 40 objects, 40*2.5mb = 100mb
  }
};

function generateRandomEmployees(number) {
  let employeeList = [];
  let i = 0;
  while (i < number) {
    employeeList.push({
      'FirstName': 'Kent',
      'LastName': 'Samuelson',
      'Prefix': 'Dr.',
      'Position': 'Ombudsman',
      'Picture': 'images/employees/02.png',
      'BirthDate': '1972/09/11',
      'HireDate': '2009/04/22',
      'Notes': 'As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.',
      'Address': '12100 Mora Dr',
      'random' : generate_random_data(5)
    });
    i++;
  }
  return employeeList;
}

function generate_random_data(size) {
  let table = {
    '1': 10, //10kb
    '2': 12, //40kb
    '3': 14, //160kb
    '4': 16, //640kb
    '5': 18, //2.5Mb
    '6': 20 //10Mb
  };
  let random_data = "abcdefghij";  //10 bytes
  for (let i = 0; i < table[size]; i++) {
    random_data += random_data;
  }
  return random_data;
}

