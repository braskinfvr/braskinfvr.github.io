function startUpload() {

    var fileUploadControl = $("#profilePhotoFileUpload")[0];
    if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = "photo.jpg";

        var parseFile = new Parse.File(name, file);
        parseFile.save().then(function (response) {
            //TODO save the file in the photo uploads and link to user and challenge
            var jobApplication = new Parse.Object("JobApplication");
            jobApplication.set("applicantName", "Joe Smith");
            jobApplication.set("applicantResumeFile", parseFile);
            jobApplication.save();
        }, function (error) {
            // The file either could not be read, or could not be saved to Parse.
        });
    }
}