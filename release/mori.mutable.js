var sj=function rj(b,c,d){d=Rf(b.root.w,d);var e=b.g-2>>>c&31;if(5<c){b=rj(b,c-5,d.e[e]);if(null==b&&0===e)return null;d.e[e]=b;return d}if(0===e)return null;d.e[e]=null;return d};
Gf.prototype.Pb=ca(0,function(){if(this.root.w){if(0===this.g)throw Error("Can't pop empty vector");if(1===this.g)this.g=0;else if(0<(this.g-1&31))this.g-=1;else{var a;a:if(a=this.g-2,a>=uf(this))a=this.W;else{for(var b=this.root,c=b,d=this.shift;;)if(0<d)c=Rf(b.w,c.e[a>>>d&31]),d-=5;else{a=c.e;break a}a=void 0}b=sj(this,this.shift,this.root);b=null!=b?b:new rf(this.root.w,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
null,null,null,null,null,null,null]);5<this.shift&&null==b.e[1]?(this.root=Rf(this.root.w,b.e[0]),this.shift-=5):this.root=b;this.g-=1;this.W=a}return this}throw Error("pop! after persistent!");});function tj(a){if(a?a.Pb:a)return a.Pb();var b;b=tj[p(null==a?null:a)];if(!b&&(b=tj._,!b))throw w("ITransientVector.-pop!",a);return b.call(null,a)}q("mori.mutable.thaw",function(a){return Kb(a)});q("mori.mutable.freeze",ie);q("mori.mutable.conj1",function(a,b){return a.Pa(null,b)});
q("mori.mutable.conj",je);q("mori.mutable.assoc",ke);q("mori.mutable.dissoc",le);q("mori.mutable.pop",function(a){return tj(a)});q("mori.mutable.disj",me);
//# sourceMappingURL=src/mori.mutable.js.map
