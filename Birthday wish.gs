function BirthdayWise(){
 var ss = SpreadsheetApp.getActive();
  var Sheet = ss.getSheetByName("Birthday");
  var lr = Sheet.getLastRow();
  
  for (var i = 2; i<=lr; i++){
    var DOBNA = Sheet.getRange(i, 3).getValue();
      if(DOBNA == ''){
       continue;
      }   
    
    var DOB = Sheet.getRange(i, 3).getValue();
    var DateMonth = Utilities.formatDate(DOB,"GMT+05:30","dd-MM"); 
    var newDate = Utilities.formatDate(new Date(), "GMT+05:30", "dd-MM");
    Logger.clear();
    
  
    if(DateMonth == newDate){
      var name = Sheet.getRange(i, 1).getValue();
      var subject = "Happy Birthday!! " + name
      var msg = Sheet.getRange(i, 5).getValue();
      var imageId = Sheet.getRange(i, 6).getValue();
      var to = Sheet.getRange(i, 2).getValue();
      var Image = DriveApp.getFileById(imageId).getBlob();
      var cc = "Director@bajatoparts.com, npd@bajatoparts.com, dme@bajatoparts.com"
      
      // Logger.log(name);
      
      var body = "Dear " + name + "," +
        "\n\n" + msg +                   
                            
            "\n\n\nThankyou"
          
      GmailApp.sendEmail(to, subject, body,
                        {
                          htmlBody: "Dear " + name + "," +
                          '<p>'+ '<p>'
                          + msg +
                          '<p>' + '<p>' + '<p>' + "Thankyou" + '<p>'+
                              "<img src=\"cid:sampleImage\">",
                        
                          inlineImages: {sampleImage: Image},
                        name: "Rajat Bajaj",
                        cc: cc,
                        replyTo: cc
                        })
    
    }
  }
}
