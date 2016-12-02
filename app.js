function isIsogram(str){
  //...
  let lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    for (let j = i+1; j < lower.length; j++) {
    if (lower[j] === lower[i]) {
      return false;
      }
    return true;
    };
  };


    console.log(str);
  }

  function isIsogram(str){
    //...
    let lower = str.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
      for (let j = i + 1; j < lower.length; j++) {
      if (lower[j] === lower[i]) {
        return false;
        }
      };
    };
    return true;
    console.log(str);
