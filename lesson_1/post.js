class Post{
     constructor(title){
         this.title = title
         this.date = new Date()
     }
     tooString(){
         return JSON.stringify({
             title: this.title,
             date: this.JSON()
         })
     }
}