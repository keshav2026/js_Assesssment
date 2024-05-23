/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const students = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (student_uid, student_name, student_age, student_address) {
    const Student_details = {
        "Student_uid": student_uid,
        "Student_name": student_name,
        "Student_age": student_age,
        "Student_address":student_address,

    }
    students.push(Student_details);
    console.log("student detail is successfully added");

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<students.length; i++)
        console.log(students[i]);

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

    console.log("total_students:"+students.length);
    }

// call your functions below this line
mintNFT("1011","Keshav","20","Bihar,India");
mintNFT("1012","Aman","19","Delhi,India");
mintNFT("1013","Rahul","21","Mumbai,India");
mintNFT("1014","Abhi","20","Bihar,India");
listNFTs();
getTotalSupply();
