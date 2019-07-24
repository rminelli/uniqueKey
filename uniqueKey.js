// Generate unique number for use a data key with 10 digits
//

let uniqueKey = function () {
    // Math.random should be unique because of its algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
    // 
    // const s = "!\"§$%&/()=?\u{20ac}";  // Generate with hex value
    // const key = s.substr(Math.floor(s.length*Math.random()), 1);
    // const data = Date()
    // console.log(data)
    return 'G' + Math.random().toString(36).substr(2, 9);
  };

  // Check if a repeatable result has been generated
  const checkResult = []
  for (let index = 0; index < 100; index++) {
     
      let _uniqueKey = uniqueKey()

      if (!checkResult.includes(_uniqueKey)) {
          checkResult.push(uniqueKey())
          console.log('Unique Key =',_uniqueKey,' | ', 'Position =',index)
      }
 }
  
  
  
