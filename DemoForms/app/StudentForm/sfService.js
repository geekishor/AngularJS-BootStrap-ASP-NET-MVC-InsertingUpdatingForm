studentFormsApp.factory('sfService',
    function () {
        var getStudent = function (id) {
            if (id == 1) {
                return {
                    id: 1,
                    fullName: "Kishor Bikram Oli",
                    objective: "To become a great software engineer",
                    department: "Physics",
                    hobbiesGaming: true,
                    hobbiesTravel: false,
                    hobbiesPhotography: true,
                    gender: "Male"
                };
            }
            return null;
        };

        var insertStudent = function (newStudent) {
            // Webservice, ajax calls to insert into the database
            return true;
        };

        var updateStudent = function (student) {
            //Webservice, ajax calls to updated into the database
            return true;
        };
        return {
            getStudent: getStudent,
            insertStudent: insertStudent,
            updateStudent: updateStudent,
        };
    });