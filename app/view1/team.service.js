(function() {

    'use strict';

    angular
        .module('myApp.view1')
        .factory('teamService', teamService);

    teamService.$inject = [];

    var tables = [
        {name:"Shifting Shadows", cx:898 , cy:62},
        {name:"MrBot", cx:898 , cy:64},
        {name:"The Kittens", cx:862 , cy:213},
        {name:"Team IronMan", cx:862 , cy:213},
        {name:"Agile Farm", cx:722 , cy:278},
        {name:"Team Hugun", cx:722 , cy:278},
        {name:"Licence-2-Code", cx:0 , cy:0},
        {name:"Flash Puffins", cx:0 , cy:0},
        {name:"GiveUsAnother10Minutes", cx:0 , cy:0},
        {name:"------", cx:0 , cy:0},
        {name:"Muhlen Kolsch", cx:0 , cy:0},
        {name:"FC Digital", cx:0 , cy:0},
        {name:"Brains", cx:0 , cy:0},
        {name:"Loading…", cx:0 , cy:0},
        {name:"Earth", cx:0 , cy:0},
        {name:"Sky", cx:0 , cy:0},
        {name:"Untabled", cx:0 , cy:0},
        {name:"C-Void", cx:0 , cy:0},
        {name:"Fritz", cx:0 , cy:0},
        {name:"Optimus Prime", cx:0 , cy:0},
        {name:"JägerMeister", cx:0 , cy:0},
        {name:"Lotd", cx:0 , cy:0},
        {name:"Propeller heads", cx:0 , cy:0},
        {name:"Flush", cx:0 , cy:0},
        {name:"The Collabs", cx:0 , cy:0},
        {name:"Network Issues", cx:0 , cy:0},
        {name:"React Team", cx:0 , cy:0},
        {name:"Data Driven", cx:0 , cy:0},
        {name:"Team 007", cx:0 , cy:0},
        {name:"-----", cx:0 , cy:0},
        {name:"FS_Society", cx:0 , cy:0},
        {name:"Anonymous", cx:0 , cy:0},
        {name:"Losse", cx:0 , cy:0},
        {name:"-----", cx:0 , cy:0}];

    var sellers = 
        [{"name":"Agile Farmer","cash":-1015.0,"online":false},{"name":"Anonymous","cash":-30.0,"online":true},{"name":"DataDriven","cash":-45.0,"online":true},{"name":"FlashPuffins","cash":-1935.0,"online":false},{"name":"GiveUsAnother10Minutes","cash":-1420.0,"online":false},{"name":"Licence-2-Kill","cash":1703.0,"online":true},{"name":"Losse","cash":-2370.0,"online":false},{"name":"MaskedCoach","cash":-2100.0,"online":false},{"name":"Mr.Reboot","cash":-515.0,"online":false},{"name":"MuehlenKoelsch","cash":-2415.0,"online":false},{"name":"NetworkIssues","cash":3986.0,"online":true},{"name":"NetworkIssuesScala","cash":455.0,"online":true},{"name":"React Team","cash":35.0,"online":true},{"name":"Shifting Shadows","cash":-255.0,"online":true},{"name":"Team007","cash":-49.0,"online":true},{"name":"TeamIronMan","cash":2824.0,"online":true},{"name":"The Collabs","cash":270.0,"online":true},{"name":"fs_society","cash":-480.0,"online":true},{"name":"hugun","cash":-1075.0,"online":false},{"name":"the-kittens","cash":-630.0,"online":false}];

    const radius = 31;

    function teamService() {

        var service = {
            getOrderedTables: getOrderedTables,
            getTeamByTableNumber: getTeamByTableNumber,
            getRecMultiplierForTeamByTableNumber : getRecMultiplierForTeamByTableNumber,
            createTablemap : createTablemap,
            getTables : getTables
        };

        return service;

        /**
         * Created by miche_000 on 06.12.2016.
         */

        function getTables(){
            return tables
        }

        function getOrderedTables(sellers){
            var ordertables = [];
            for(var i = 0; i<tables.length; i++){
                for(var y = 0; y<sellers.length; y++){
                    if(sellers[y].name == tables[i].name){
                        ordertables.push({name:sellers[y].name, cash:sellers[y].cash, online:sellers[y].online, id : i+1});
                    }
                }
            }
            return ordertables;
        }

        function getTeamByTableNumber(tablenumber){
            var ordertables = getOrderedTables(sellers);
            const radius = 31;
            for(var i = 0; i<ordertables.length; i++){
                if(ordertables[i].id == tablenumber){
                    return ordertables[i];
                }
            }
        }

        function getRecMultiplierForTeamByTableNumber(tablenumber){
            var team = getTeamByTableNumber(tablenumber);
            if(typeof team != 'undefined' && team.cash>1000){
                return team.cash / 1000;
            } else
                return 1;
        }
        function transformTable(tablenumber){
            $(".table"+tablenumber).attr("ry",radius*getRecMultiplierForTeamByTableNumber(tablenumber));
            $(".table"+tablenumber).attr("rx",radius*getRecMultiplierForTeamByTableNumber(tablenumber));
        }

        function createTablemap(){
            for(var i = 1; i<tables.length; i++){
                transformTable(i);
            }
        }



    }

})();