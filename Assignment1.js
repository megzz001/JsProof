/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// I created a array to store the NFT's
let NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (songName, artistName, genreName, releaseDate , description, image) {

    let nft_metaData = {
        songName:songName,
        artistName: artistName,
        genreName:genreName,
        releaseDate:releaseDate,
        description: description,
        image: image
    }
    NFTs.push(nft_metaData);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
     for(var i = 0; i < NFTs.length; i++) {
        n = i + 1;
        console.log("Information about "+ n + " song stored in NFTs is given by --> ");
        console.log("Song Name : "+ NFTs[i].songName);
        console.log("artist : "+ NFTs[i].artistName);
        console.log("genre : "+ NFTs[i].genreName);
        console.log("date : "+ NFTs[i].releaseDate);
        console.log("description : "+ NFTs[i].description);
        console.log("image : "+ NFTs[i].image + "\n");
    }

}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(" The total number of stored nft's metadata in the array are : "+ NFTs.length);
}

// call your functions below this line
mintNFT("Six feet under", "weekend" , " English Song", "20/04/2020", "my favourite song",  "https://github.com/megzz001/JsProof/blob/main/image1.png" )
mintNFT("Butterfly Door", "Bella" ,"sad Song", "20/04/2023", "Composed by deepak sing as well :)",  "https://github.com/megzz001/JsProof/blob/main/image2.png" )
mintNFT("I'm done", "Flowboo" ,  "Hindi Rap Song", "13/04/2022", "Composed by Crishtan lobo as well :)",  "https://github.com/megzz001/JsProof/blob/main/image3.png" )

listNFTs();

getTotalSupply();



