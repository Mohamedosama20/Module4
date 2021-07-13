(function (window){

  
    var byeSpeaker = {}
    byeSpeaker.speak = "names";
    
    var speakWord = "Good Bye";
    
    
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }
    
    
    window.byeSpeaker = byeSpeaker;
    
    })(window);