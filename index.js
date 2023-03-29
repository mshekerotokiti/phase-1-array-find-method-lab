
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  { year: "2012", result: "W"},
  { year: "2011", result: "N/A"},
  { year: "2010", result: "N/A"},
  { year: "2009", result: "W"},
  { year: "2008", result: "W"},
  { year: "2007", result: "L"},

]
function superbowlWin(record)
{
    for(let element of record){
        if(element.result ==="W"){
            return element.year
        }
    }
} 
record.find(superbowlWin)

