//Greeter.js
let data = require('./data.js');
let Map = require('./map.js');
/********章鱼模型在这里***********/
module.exports = function () {
    const initialLocation = data;
    let Location = function (data) {
        this.title = data.title;
        this.position = data.position;
        this.address = data.address;
        this.tel = data.tel;
        this.type = data.type;
    };

    /**视图模型*****/    
    function ViewModel() {
        let markers = Map.Markers;
        let defaultIcon = Map.DefaultIcon;
        let highlightedIcon = Map.HighlightedIcon;
        let infoWindowContent = Map.InfoWinCon;
        let self = this;
        self.userSearch = ko.observable("");
        self.locationList = ko.observableArray([]);
        initialLocation.forEach(function (locationItem) {
            self.locationList.push(new Location(locationItem));
        });

        
        /**过滤用户在搜索栏填入的地点名字******/
       
        self.inputFilter = ko.computed(function () {
            let filter = self.userSearch();
            if(!filter){
                ko.utils.arrayMap(markers, function (marker) {
                    marker.show();
                });
                return self.locationList()
            } else {
                return ko.utils.arrayFilter(self.locationList(), function (item) {
                    ko.utils.arrayMap(markers, function (marker) {
                        if(ko.utils.stringStartsWith(marker.F.title, filter)){
                            marker.show();
                        }else {
                            marker.hide();
                        }
                    });
                    return ko.utils.stringStartsWith(item.title, filter);
                })
            }
        });

         /***展示标注窗体/**
         
        self.show = function () {
            let title = this.title;
            let address = this.address;
            let tel = this.tel;
            let type = this.type;
            let position = this.position;
            ko.utils.arrayForEach(Map.Markers, function (marker) {
                marker.setIcon(defaultIcon);
                if(title === marker.F.title){
                    marker.setAnimation('AMAP_ANIMATION_DROP');
                    marker.setIcon(highlightedIcon);
                    infoWindowContent(title, address, tel, type, position);
                }
            });
        };

        /**设置在左边打开搜索栏的功能*/
        self.openNav = function () {
            document.getElementById('options-box').style.marginLeft = '0';
            document.getElementById('map').style.marginLeft = '302px';
            document.getElementById('container').style.marginLeft = '302px';
        };

         /**设置在左边关闭搜索栏的功能*/
        self.closeNav = function () {
            document.getElementById('options-box').style.marginLeft = '-302px';
            document.getElementById('map').style.marginLeft = '0';
            document.getElementById('container').style.marginLeft = '0';
        }
    }

    let model = new ViewModel();
    ko.applyBindings(model);
};