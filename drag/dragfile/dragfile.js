var FileLoader = function(file,event){
    this.fileRead = new FileReader(); // 文件读取对象
    this.file = file; // 需要上传文件信息
    this.event = event || {}; // 处理文件信息
    this.size = file.size; // 上传文件大小
    this.loaded = 0; // 已上传文件
    this.m = 1024 * 1024; // 一兆
    this.readBlob(0); // 是否需要分段读取
    this.bindEvent(); //  绑定
}
    FileLoader.prototype = {
        // 将file文件按1M进行切割
        readBlob:function(start){
            var blob,
                file = this.file;
            if(file.slice){
                blob = file.slice(start,start + this.m);
                console.log(blob);
            }else {
                blob = file;
                console.log('a');
            }
            this.fileRead.readAsText(blob);
        },
        bindEvent:function(){
            this.onprogress();
            this.onload();
        },
        onprogress:function(){
            console.log(111);
            var size = this.size;
            var loaded = this.loaded;
            var percent = loaded / size * 100;
            var progress = this.event.progress;
            progress && progress(percent);
            console.log('progress');
        },
        onsuccess:function(){

        },
        onload:function(){
            var fileRead = this.fileRead;
            var uploadImg = this.event.load;
            uploadImg && uploadImg(fileRead.result);
            console.log('onload');
        },
        abort: function(){
            var reader = this.reader;
            if(reader){
                reader.abort();
            }
        }
    }
