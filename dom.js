window.$=function(selectOrnode){
    let array=[] //新建一个数组
    if(typeof selectOrnode === 'string'){
        let items = document.querySelectorAll(selectOrnode) // items是对象
        for(var i=0;i<items.length;i++){
            array.push(items[i])  //把对象里面的push进array数组中
        }
    }else if(selectOrnode instanceof Element){
        array.push(selectOrnode)
    }else if(selectOrnode instanceof Array){
        for(var i=0;i<selectOrnode.length;i++){
            array.push(selectOrnode[i])
        }
    }
    

    /*给元素添加一个监听事件*/
    array.on = function(eventType,fn){
        for(var i=0;i<array.length;i++){
            array[i].addEventListener(eventType,fn)
        }
    }

    /*给元素重新赋予一个新的class名 */
    array.addClass = function(className){
        for(var i=0;i<array.length;i++){
            array[i].classList.add(className)
        }
        return array
    }
    
    /*删除class名 */
    array.removeClass = function(className){
        for(var i=0;i<array.length;i++){
            array[i].classList.remove(className)
        }
        return array
    }

    /*更换或调取元素文本内容(textContent可以换成ie支持的innertext)*/
    array.text = function(value){
        if(value !== undefined){    //如果value有值，重新赋值
                for(var i=0;i<array.length;i++){
                array[i].textContent = value
            }
            return array
        }else{
            let result = []
            for(var i=0;i<array.length;i++){
                result.push(array[i].textContent)
            }
            return result
        }
    }

    /*获取第n个 */
    array.get = function(index){
        return array[index]
    }

    /* 获取兄弟元素 */
    array.siblings = function(){
        let children = array[0].parentNode.children
        let rArray = []
        for(var i=0;i<children.length;i++){
            if(children[i] !== array[0]){
                rArray.push(children[i])
            }
        }
        return $(rArray)
    }
    return array
}
