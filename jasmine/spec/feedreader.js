/* feedreader.js
 *
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 */

/* 我们把所有的测试都放在了 $() 函数里面。因为有些测试需要 DOM 元素。
 * 我们得保证在 DOM 准备好之前他们不会被运行。
 */
$(function() {
    /* 这是我们第一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
     * 都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
     */
    describe('RSS Feeds', function() {
        /* 这是我们的第一个测试 - 它用来保证 allFeeds 变量被定义了而且
         * 不是空的。在你开始做这个项目剩下的工作之前最好实验一下这个测试
         * 比如你把 app.js 里面的 allFeeds 变量变成一个空的数组然后刷新
         * 页面看看会发生什么。
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /******TODO:测试allFeeds对象数组里，每个对象的name和url属性为非空，且被定义，这里我合起来写了**********/

        it(' name and src are defined both are not null', function() {
            for (var object of allFeeds) {
                expect(object.name).toBeDefined();
                expect(object.name).not.toBe('');
                expect(object.url).toBeDefined();
                expect(object.url).not.toBe('');
            }
        });


    });

    describe('The menu', function() {
        /**经过查看，菜单元素默认隐藏是通过body元素属性的menu-hidden实现的****/
        it('menu default is hided', function() {
            var menu =document.getElementsByTagName('body');
expect(menu[0].className).toBe('menu-hidden');
        });
        it('menu logo is hidden or show by clicked',function(){

        });

    });
    /* TODO: 写一个叫做 "The menu" 的测试用例 */

    /* TODO:
     * 写一个测试用例保证菜单元素默认是隐藏的。你需要分析 html 和 css
     * 来搞清楚我们是怎么实现隐藏/展示菜单元素的。
     */

    /* TODO:
     * 写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。这个
     * 测试应该包含两个 expectation ： 党点击图标的时候菜单是否显示，
     * 再次点击的时候是否隐藏。
     */

    /* TODO: 13. 写一个叫做 "Initial Entries" 的测试用例 */

    /* TODO:
     * 写一个测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素
     * 里面至少有一个 .entry 的元素。
     *
     * 记住 loadFeed() 函数是异步的所以这个而是应该使用 Jasmine 的 beforeEach
     * 和异步的 done() 函数。
     */

    /* TODO: 写一个叫做 "New Feed Selection" 的测试用例 */

    /* TODO:
     * 写一个测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
     * 记住，loadFeed() 函数是异步的。
     */
}());