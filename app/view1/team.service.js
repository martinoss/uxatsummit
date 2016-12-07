(function() {

    'use strict';

    angular
        .module('myApp.view1')
        .factory('teamService', teamService);

    teamService.$inject = [];

    var tables = [
        {name:"losse", cx:893 , cy:320},
        {name:"----", cx:893 , cy:320},
        {name:"Mr.Roboot", cx:873 , cy:432},
        {name:"Shifting_Shadows", cx:873 , cy:432},
        {name:"hugun", cx:780 , cy:501},
        {name:"Agile Farmer", cx:780 , cy:501},
        {name:"FlashPuffins", cx:699 , cy:562},
        {name:"Licence-2-Code", cx:699 , cy:562},
        {name:"GiveUsAnother10Minutes", cx:566 , cy:574},
        {name:"------", cx:566 , cy:574},
        {name:"Muhlen Kolsch", cx:425 , cy:569},
        {name:"FC Digital", cx:425 , cy:569},
        {name:"Brains", cx:365 , cy:503},
        {name:"Loading…", cx:365 , cy:503},
        {name:"Earth", cx:262 , cy:454},
        {name:"Sky", cx:262 , cy:454},
        {name:"Untabled", cx:297 , cy:360},
        {name:"C-Void", cx:297 , cy:360},
        {name:"Fritz", cx:389 , cy:409},
        {name:"Optimus Prime", cx:389 , cy:409},
        {name:"JägerMeister", cx:470 , cy:377},
        {name:"Lotd", cx:470 , cy:377},
        {name:"Propeller heads", cx:465 , cy:470},
        {name:"Flush", cx:465 , cy:470},
        {name:"The Collabs", cx: 580, cy:477},
        {name:"Network Issues", cx: 580, cy:477},
        {name:"React Team", cx: 671, cy:470},
        {name:"Data Driven", cx: 671, cy:470},
        {name:"Team 007", cx: 756, cy:412},
        {name:"-----", cx: 756, cy:412},
        {name:"FS_Society", cx: 800, cy:320},
        {name:"Anonymous", cx: 800, cy:320},
        {name:"Losse", cx: 673, cy:382},
        {name:"-----", cx: 673, cy:382}];


    const radius = 31;

    function teamService() {

        var service = {
            getOrderedTables: getOrderedTables,
            getRecMultiplierForTeamByTableNumber : getRecMultiplierForTeamByTableNumber,
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
                var table = undefined;
                for(var y = 0; y<sellers.length; y++){
                    if(sellers[y].name == tables[i].name){
                        table = {name:sellers[y].name, cash:sellers[y].cash, online:sellers[y].online, id : i+1, cx:tables[i].cx, cy:tables[i].cy, radius:55*getRecMultiplierForTeamByTableNumber(sellers, sellers[y].cash)};
                    }
                }
                if(!table){
                    table = {name:tables[i].name, cash:0, online:false, id : i+1, cx:tables[i].cx, cy:tables[i].cy, radius:10};
                }
                ordertables.push(table);
            }
            return ordertables;
        }

        function getRecMultiplierForTeamByTableNumberOLD(cash){
            if(cash>1000){
                return cash / 1000;
            } else
                return 1;
        }

        function getMaxCash(sellers){
            var max = 0;
            for(var y = 0; y<sellers.length; y++) {
                if(max < sellers[y].cash){
                    max = sellers[y].cash;
                }
            }
            return max;
        }

        function getMinCash(sellers){
            var min = 0;
            for(var y = 0; y<sellers.length; y++) {
                if(min > sellers[y].cash){
                    min = sellers[y].cash;
                }
            }
            return min;
        }

        function getRecMultiplierForTeamByTableNumber(sellers, current){
            var min = getMinCash(sellers);
            var max = getMaxCash(sellers);
            var offset = 0;
            if(min<0){
                offset = -min;
            }
            console.log((current+offset) /(max + offset));
            return (current+offset) /(max + offset);
        }



    }

})();