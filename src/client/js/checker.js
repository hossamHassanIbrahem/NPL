 const checker = (checkinputs) => {
        const check = new RegExp(
          /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/
        );
        return check.test(checkinputs);
      };

    export  {checker} ;
