$(function(){var h=$("[data-jsenabled=check]"),a,d,c=0,b=h.length;
for(;
c<b;
c++){a=h.eq(c);
d=a.find("input[name=isJsEnabled]");
if(d.length===1){d.val("true")
}g(a)
}function g(i){i.on("submit",function(){var o=i.find("#session_key-login"),t=i.find("input[name=email]"),p,s,m,q,l,j;
if(o.length){s=o[0].value
}else{if(t.length){s=t[0].value
}else{s=""
}}if(!Date.now){Date.now=function k(){return new Date().getTime()
}
}q=Date.now();
l=e().join(":");
j=s+":"+l;
if(window.jsRandomCalculator){if(window.jsRandomCalculator.computeJson){m=window.jsRandomCalculator.computeJson({ts:q,n:l,email:s})
}else{m=window.jsRandomCalculator.compute(l,s,q)
}p=window.jsRandomCalculator.version
}else{m="";
p=""
}f("client_ts",q,i);
f("client_r",j,i);
f("client_output",m,i);
f("client_n",l,i);
f("client_v",p,i)
})
}function e(){var j=[],k;
for(k=0;
k<3;
k++){j[k]=Math.floor(Math.random()*900000000)+100000000
}return j
}function f(j,l,k){var i=$("input[name="+j+"]",k);
if(i.length){i.val(l)
}else{i=document.createElement("input");
i.setAttribute("type","hidden");
i.setAttribute("name",j);
i.setAttribute("value",l);
k.append(i)
}}});
