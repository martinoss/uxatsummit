(function() {

    'use strict';

    angular
        .module('myApp.view1')
        .factory('teamService', teamService);

    teamService.$inject = [];

    var tables = [
        {name:"Shifting Shadows", cx:898 , cy:62},
        {name:"MrBot", cx:898 , cy:62},
        {name:"The Kittens", cx:862 , cy:213},
        {name:"Team IronMan", cx:862 , cy:213},
        {name:"Agile Farm", cx:722 , cy:278},
        {name:"Team Hugun", cx:722 , cy:278},
        {name:"Licence-2-Code", cx:604 , cy:351},
        {name:"Flash Puffins", cx:604 , cy:351},
        {name:"GiveUsAnother10Minutes", cx:455 , cy:352},
        {name:"------", cx:455 , cy:352},
        {name:"Muhlen Kolsch", cx:302 , cy:358},
        {name:"FC Digital", cx:302 , cy:358},
        {name:"Brains", cx:221 , cy:285},
        {name:"Loading…", cx:221 , cy:285},
        {name:"Earth", cx:66 , cy:218},
        {name:"Sky", cx:66 , cy:218},
        {name:"Untabled", cx:105 , cy:141},
        {name:"C-Void", cx:105 , cy:141},
        {name:"Fritz", cx:201 , cy:175},
        {name:"Optimus Prime", cx:201 , cy:175},
        {name:"JägerMeister", cx:307 , cy:113},
        {name:"Lotd", cx:307 , cy:113},
        {name:"Propeller heads", cx:331 , cy:213},
        {name:"Flush", cx:331 , cy:213},
        {name:"The Collabs", cx:454 , cy:233},
        {name:"Network Issues", cx:454 , cy:233},
        {name:"React Team", cx:565 , cy:212},
        {name:"Data Driven", cx:565 , cy:212},
        {name:"Team 007", cx:670 , cy:136},
        {name:"-----", cx:670 , cy:136},
        {name:"FS_Society", cx:764 , cy:66},
        {name:"Anonymous", cx:764 , cy:66},
        {name:"Losse", cx:545 , cy:96},
        {name:"-----", cx:545 , cy:96}];


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
                var table = 'undefined';
                for(var y = 0; y<sellers.length; y++){
                    if(sellers[y].name == tables[i].name){
                        table = {name:sellers[y].name, cash:sellers[y].cash, online:sellers[y].online, id : i+1, cx:tables[i].cx, cy:tables[i].cy, radius:55*getRecMultiplierForTeamByTableNumber(sellers, sellers[y].cash)};
                    }
                }
                if(table == 'undefined'){
                    table = {name:tables[i].name, cash:0, online:false, id : i+1, cx:tables[i].cx, cy:tables[i].cy, radius:31*1};
                }
                ordertables.push(table);
            }
            console.log(ordertables);
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
            return (current+offset) /(max + offset);
        }



    }

})();