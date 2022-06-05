// Modify with comments
function replaceExample(){
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace("apples", "oranges", "gi");
print(newstr);
}


function styleHyphenFormat(propertyName)
{
  function upperToHyphenLower(match)
  {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/, upperToHyphenLower);
}