(function() {

    'use strict';

    angular
        .module('myApp.view1')
        .factory('teamService', teamService);

    teamService.$inject = [];

    var tables = [
        "Shifting Shadows",
        "MrBot",
        "The Kittens",
        "Team IronMan",
        "Agile Farm",
        "Team Hugun",
        "Licence-2-Code",
        "Flash Puffins",
        "GiveUsAnother10Minutes",
        "------",
        "Muhlen Kolsch",
        "FC Digital",
        "Brains",
        "Loading…",
        "Earth",
        "Sky",
        "Untabled",
        "C-Void",
        "Fritz",
        "Optimus Prime",
        "JägerMeister",
        "Lotd",
        "Propeller heads",
        "Flush",
        "The Collabs",
        "Network Issues",
        "React Team",
        "Data Driven",
        "Team 007",
        "-----",
        "FS_Society",
        "Anonymous",
        "Losse",
        "-----"];

    var sellers = 
        [{"name":"Agile Farmer","cash":-1015.0,"online":false},{"name":"Anonymous","cash":-30.0,"online":true},{"name":"DataDriven","cash":-45.0,"online":true},{"name":"FlashPuffins","cash":-1935.0,"online":false},{"name":"GiveUsAnother10Minutes","cash":-1420.0,"online":false},{"name":"Licence-2-Kill","cash":1703.0,"online":true},{"name":"Losse","cash":-2370.0,"online":false},{"name":"MaskedCoach","cash":-2100.0,"online":false},{"name":"Mr.Reboot","cash":-515.0,"online":false},{"name":"MuehlenKoelsch","cash":-2415.0,"online":false},{"name":"NetworkIssues","cash":3986.0,"online":true},{"name":"NetworkIssuesScala","cash":455.0,"online":true},{"name":"React Team","cash":35.0,"online":true},{"name":"Shifting Shadows","cash":-255.0,"online":true},{"name":"Team007","cash":-49.0,"online":true},{"name":"TeamIronMan","cash":2824.0,"online":true},{"name":"The Collabs","cash":270.0,"online":true},{"name":"fs_society","cash":-480.0,"online":true},{"name":"hugun","cash":-1075.0,"online":false},{"name":"the-kittens","cash":-630.0,"online":false}];    


    function teamService() {

        var service = {
            getOrderedTables: getOrderedTables,
            getTeamByTableNumber: getTeamByTableNumber,
            getRecMultiplierForTeamByTableNumber : getRecMultiplierForTeamByTableNumber
        };

        return service;

        function getOrderedTables(sellers){
            var ordertables = [];
            for(var i = 0; i<tables.length; i++){
                for(var y = 0; y<sellers.length; y++){
                    if(sellers[y].name == tables[i]){
                        ordertables.push({name:sellers[y].name, cash:sellers[y].cash, online:sellers[y].online, id : i+1});
                    }
                }
            }
            return ordertables;
        }


        function getTeamByTableNumber(tablenumber){
            for(var i = 0; i<ordertables.length; i++){
                if(ordertables[i].id == tablenumber){
                    return ordertables[i];
                }
            }
        }

        function getRecMultiplierForTeamByTableNumber(tablenumber){
            var team = getTeamByTableNumber(tablenumber);
            if(team.cash>100){
                return team.cash / 100;
            } else
                return 1;
        }        


    }

})();