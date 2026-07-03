var Mi = {};
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = Mi.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = Mi.NODE_ENV !== "production" ? Object.freeze([]) : [], re = () => {
}, Ri = () => !1, Zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), En = (e) => e.startsWith("onUpdate:"), Q = Object.assign, Oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ns = Object.prototype.hasOwnProperty, k = (e, t) => ns.call(e, t), $ = Array.isArray, ht = (e) => $n(e) === "[object Map]", Fi = (e) => $n(e) === "[object Set]", M = (e) => typeof e == "function", ee = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", wo = (e) => (z(e) || M(e)) && M(e.then) && M(e.catch), ji = Object.prototype.toString, $n = (e) => ji.call(e), xo = (e) => $n(e).slice(8, -1), An = (e) => $n(e) === "[object Object]", Do = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ Qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), os = /* @__PURE__ */ Qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, is = /-\w/g, Ne = In(
  (e) => e.replace(is, (t) => t.slice(1).toUpperCase())
), rs = /\B([A-Z])/g, we = In(
  (e) => e.replace(rs, "-$1").toLowerCase()
), Mn = In((e) => e.charAt(0).toUpperCase() + e.slice(1)), dt = In(
  (e) => e ? `on${Mn(e)}` : ""
), st = (e, t) => !Object.is(e, t), Mt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, yn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, ss = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Jo = (e) => {
  const t = ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Yo;
const Qt = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = ee(o) ? us(o) : Dt(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ee(e) || z(e))
    return e;
}
const ls = /;(?![^(]*\))/g, cs = /:([^]+)/, fs = /\/\*[^]*?\*\//g;
function us(e) {
  const t = {};
  return e.replace(fs, "").split(ls).forEach((n) => {
    if (n) {
      const o = n.split(cs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Rn(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = Rn(e[n]);
      o && (t += o + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const as = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ds = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ps = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", hs = /* @__PURE__ */ Qe(as), gs = /* @__PURE__ */ Qe(ds), _s = /* @__PURE__ */ Qe(ps), ms = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bs = /* @__PURE__ */ Qe(ms);
function Li(e) {
  return !!e || e === "";
}
const Hi = (e) => !!(e && e.__v_isRef === !0), ki = (e) => ee(e) ? e : e == null ? "" : $(e) || z(e) && (e.toString === ji || !M(e.toString)) ? Hi(e) ? ki(e.value) : JSON.stringify(e, Ui, 2) : String(e), Ui = (e, t) => Hi(t) ? Ui(e, t.value) : ht(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[zn(o, r) + " =>"] = i, n),
    {}
  )
} : Fi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => zn(n))
} : ft(t) ? zn(t) : z(t) && !$(t) && !An(t) ? String(t) : t, zn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var J = {};
function Ae(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ee;
class Es {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    } else J.NODE_ENV !== "production" && Ae("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ee, Ee = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ee = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ys() {
  return Ee;
}
let K;
const Jn = /* @__PURE__ */ new WeakSet();
class Bi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && Ee.active && Ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jn.has(this) && (Jn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ki(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Xo(this), Gi(this);
    const t = K, n = Pe;
    K = this, Pe = !0;
    try {
      return this.fn();
    } finally {
      J.NODE_ENV !== "production" && K !== this && Ae(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), qi(this), K = t, Pe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Co(t);
      this.deps = this.depsTail = void 0, Xo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    lo(this) && this.run();
  }
  get dirty() {
    return lo(this);
  }
}
let Wi = 0, Ut, Bt;
function Ki(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bt, Bt = e;
    return;
  }
  e.next = Ut, Ut = e;
}
function Vo() {
  Wi++;
}
function So() {
  if (--Wi > 0)
    return;
  if (Bt) {
    let t = Bt;
    for (Bt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ut; ) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Gi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qi(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), Co(o), Ns(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function lo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qt) || (e.globalVersion = qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !lo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = K, o = Pe;
  K = e, Pe = !0;
  try {
    Gi(e);
    const i = e.fn(e._value);
    (t.version === 0 || st(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    K = n, Pe = o, qi(e), e.flags &= -3;
  }
}
function Co(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), J.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Co(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ns(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Pe = !0;
const Ji = [];
function Ie() {
  Ji.push(Pe), Pe = !1;
}
function Me() {
  const e = Ji.pop();
  Pe = e === void 0 ? !0 : e;
}
function Xo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = K;
    K = void 0;
    try {
      t();
    } finally {
      K = n;
    }
  }
}
let qt = 0;
class vs {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class To {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, J.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!K || !Pe || K === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== K)
      n = this.activeLink = new vs(K, this), K.deps ? (n.prevDep = K.depsTail, K.depsTail.nextDep = n, K.depsTail = n) : K.deps = K.depsTail = n, Yi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = K.depsTail, n.nextDep = void 0, K.depsTail.nextDep = n, K.depsTail = n, K.deps === n && (K.deps = o);
    }
    return J.NODE_ENV !== "production" && K.onTrack && K.onTrack(
      Q(
        {
          effect: K
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, qt++, this.notify(t);
  }
  notify(t) {
    Vo();
    try {
      if (J.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Q(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      So();
    }
  }
}
function Yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Yi(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), J.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const co = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ Symbol(
  J.NODE_ENV !== "production" ? "Object iterate" : ""
), fo = /* @__PURE__ */ Symbol(
  J.NODE_ENV !== "production" ? "Map keys iterate" : ""
), zt = /* @__PURE__ */ Symbol(
  J.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ie(e, t, n) {
  if (Pe && K) {
    let o = co.get(e);
    o || co.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new To()), i.map = o, i.key = n), J.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function We(e, t, n, o, i, r) {
  const s = co.get(e);
  if (!s) {
    qt++;
    return;
  }
  const l = (f) => {
    f && (J.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : f.trigger());
  };
  if (Vo(), t === "clear")
    s.forEach(l);
  else {
    const f = $(e), h = f && Do(n);
    if (f && n === "length") {
      const d = Number(o);
      s.forEach((a, _) => {
        (_ === "length" || _ === zt || !ft(_) && _ >= d) && l(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(zt)), t) {
        case "add":
          f ? h && l(s.get("length")) : (l(s.get(gt)), ht(e) && l(s.get(fo)));
          break;
        case "delete":
          f || (l(s.get(gt)), ht(e) && l(s.get(fo)));
          break;
        case "set":
          ht(e) && l(s.get(gt));
          break;
      }
  }
  So();
}
function Nt(e) {
  const t = j(e);
  return t === e ? t : (ie(t, "iterate", zt), pe(e) ? t : t.map(Fe));
}
function Fn(e) {
  return ie(e = j(e), "iterate", zt), e;
}
function nt(e, t) {
  return Re(e) ? lt(e) ? Ct(Fe(t)) : Ct(t) : Fe(t);
}
const Os = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (e) => nt(this, e));
  },
  concat(...e) {
    return Nt(this).concat(
      ...e.map((t) => $(t) ? Nt(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = nt(this, e[1]), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => nt(this, o)),
      arguments
    );
  },
  find(e, t) {
    return Je(
      this,
      "find",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(
      this,
      "findLast",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xn(this, "includes", e);
  },
  indexOf(...e) {
    return Xn(this, "indexOf", e);
  },
  join(e) {
    return Nt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rt(this, "pop");
  },
  push(...e) {
    return Rt(this, "push", e);
  },
  reduce(e, ...t) {
    return Zo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zo(this, "reduceRight", e, t);
  },
  shift() {
    return Rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rt(this, "splice", e);
  },
  toReversed() {
    return Nt(this).toReversed();
  },
  toSorted(e) {
    return Nt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Nt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rt(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", (e) => nt(this, e));
  }
};
function Yn(e, t, n) {
  const o = Fn(e), i = o[t]();
  return o !== e && !pe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const ws = Array.prototype;
function Je(e, t, n, o, i, r) {
  const s = Fn(e), l = s !== e && !pe(e), f = s[t];
  if (f !== ws[t]) {
    const a = f.apply(e, r);
    return l ? Fe(a) : a;
  }
  let h = n;
  s !== e && (l ? h = function(a, _) {
    return n.call(this, nt(e, a), _, e);
  } : n.length > 2 && (h = function(a, _) {
    return n.call(this, a, _, e);
  }));
  const d = f.call(s, h, o);
  return l && i ? i(d) : d;
}
function Zo(e, t, n, o) {
  const i = Fn(e);
  let r = n;
  return i !== e && (pe(e) ? n.length > 3 && (r = function(s, l, f) {
    return n.call(this, s, l, f, e);
  }) : r = function(s, l, f) {
    return n.call(this, s, nt(e, l), f, e);
  }), i[t](r, ...o);
}
function Xn(e, t, n) {
  const o = j(e);
  ie(o, "iterate", zt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && Nn(n[0]) ? (n[0] = j(n[0]), o[t](...n)) : i;
}
function Rt(e, t, n = []) {
  Ie(), Vo();
  const o = j(e)[t].apply(e, n);
  return So(), Me(), o;
}
const xs = /* @__PURE__ */ Qe("__proto__,__v_isRef,__isVue"), Xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Ds(e) {
  ft(e) || (e = String(e));
  const t = j(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class Zi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? ir : or : r ? nr : tr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = $(t);
    if (!i) {
      let f;
      if (s && (f = Os[n]))
        return f;
      if (n === "hasOwnProperty")
        return Ds;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ne(t) ? t : o
    );
    if ((ft(n) ? Xi.has(n) : xs(n)) || (i || ie(t, "get", n), r))
      return l;
    if (ne(l)) {
      const f = s && Do(n) ? l : l.value;
      return i && z(f) ? ao(f) : f;
    }
    return z(l) ? i ? ao(l) : Po(l) : l;
  }
}
class Qi extends Zi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    const s = $(t) && Do(n);
    if (!this._isShallow) {
      const h = Re(r);
      if (!pe(o) && !Re(o) && (r = j(r), o = j(o)), !s && ne(r) && !ne(o))
        return h ? (J.NODE_ENV !== "production" && Ae(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const l = s ? Number(n) < t.length : k(t, n), f = Reflect.set(
      t,
      n,
      o,
      ne(t) ? t : i
    );
    return t === j(i) && (l ? st(o, r) && We(t, "set", n, o, r) : We(t, "add", n, o)), f;
  }
  deleteProperty(t, n) {
    const o = k(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && We(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ft(n) || !Xi.has(n)) && ie(t, "has", n), o;
  }
  ownKeys(t) {
    return ie(
      t,
      "iterate",
      $(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class er extends Zi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return J.NODE_ENV !== "production" && Ae(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return J.NODE_ENV !== "production" && Ae(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Vs = /* @__PURE__ */ new Qi(), Ss = /* @__PURE__ */ new er(), Cs = /* @__PURE__ */ new Qi(!0), Ts = /* @__PURE__ */ new er(!0), uo = (e) => e, ln = (e) => Reflect.getPrototypeOf(e);
function Ps(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = j(i), s = ht(r), l = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, h = i[e](...o), d = n ? uo : t ? Ct : Fe;
    return !t && ie(
      r,
      "iterate",
      f ? fo : gt
    ), {
      // iterator protocol
      next() {
        const { value: a, done: _ } = h.next();
        return _ ? { value: a, done: _ } : {
          value: l ? [d(a[0]), d(a[1])] : d(a),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function cn(e) {
  return function(...t) {
    if (J.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ae(
        `${Mn(e)} operation ${n}failed: target is readonly.`,
        j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $s(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = j(r), l = j(i);
      e || (st(i, l) && ie(s, "get", i), ie(s, "get", l));
      const { has: f } = ln(s), h = t ? uo : e ? Ct : Fe;
      if (f.call(s, i))
        return h(r.get(i));
      if (f.call(s, l))
        return h(r.get(l));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ie(j(i), "iterate", gt), i.size;
    },
    has(i) {
      const r = this.__v_raw, s = j(r), l = j(i);
      return e || (st(i, l) && ie(s, "has", i), ie(s, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const s = this, l = s.__v_raw, f = j(l), h = t ? uo : e ? Ct : Fe;
      return !e && ie(f, "iterate", gt), l.forEach((d, a) => i.call(r, h(d), h(a), s));
    }
  };
  return Q(
    n,
    e ? {
      add: cn("add"),
      set: cn("set"),
      delete: cn("delete"),
      clear: cn("clear")
    } : {
      add(i) {
        !t && !pe(i) && !Re(i) && (i = j(i));
        const r = j(this);
        return ln(r).has.call(r, i) || (r.add(i), We(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !pe(r) && !Re(r) && (r = j(r));
        const s = j(this), { has: l, get: f } = ln(s);
        let h = l.call(s, i);
        h ? J.NODE_ENV !== "production" && Qo(s, l, i) : (i = j(i), h = l.call(s, i));
        const d = f.call(s, i);
        return s.set(i, r), h ? st(r, d) && We(s, "set", i, r, d) : We(s, "add", i, r), this;
      },
      delete(i) {
        const r = j(this), { has: s, get: l } = ln(r);
        let f = s.call(r, i);
        f ? J.NODE_ENV !== "production" && Qo(r, s, i) : (i = j(i), f = s.call(r, i));
        const h = l ? l.call(r, i) : void 0, d = r.delete(i);
        return f && We(r, "delete", i, void 0, h), d;
      },
      clear() {
        const i = j(this), r = i.size !== 0, s = J.NODE_ENV !== "production" ? ht(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && We(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Ps(i, e, t);
  }), n;
}
function jn(e, t) {
  const n = $s(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    k(n, i) && i in o ? n : o,
    i,
    r
  );
}
const As = {
  get: /* @__PURE__ */ jn(!1, !1)
}, Is = {
  get: /* @__PURE__ */ jn(!1, !0)
}, Ms = {
  get: /* @__PURE__ */ jn(!0, !1)
}, Rs = {
  get: /* @__PURE__ */ jn(!0, !0)
};
function Qo(e, t, n) {
  const o = j(n);
  if (o !== n && t.call(e, o)) {
    const i = xo(e);
    Ae(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap();
function Fs(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function js(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fs(xo(e));
}
function Po(e) {
  return Re(e) ? e : Ln(
    e,
    !1,
    Vs,
    As,
    tr
  );
}
function Ls(e) {
  return Ln(
    e,
    !1,
    Cs,
    Is,
    nr
  );
}
function ao(e) {
  return Ln(
    e,
    !0,
    Ss,
    Ms,
    or
  );
}
function Ge(e) {
  return Ln(
    e,
    !0,
    Ts,
    Rs,
    ir
  );
}
function Ln(e, t, n, o, i) {
  if (!z(e))
    return J.NODE_ENV !== "production" && Ae(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = js(e);
  if (r === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return i.set(e, l), l;
}
function lt(e) {
  return Re(e) ? lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Re(e) {
  return !!(e && e.__v_isReadonly);
}
function pe(e) {
  return !!(e && e.__v_isShallow);
}
function Nn(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Hs(e) {
  return !k(e, "__v_skip") && Object.isExtensible(e) && yn(e, "__v_skip", !0), e;
}
const Fe = (e) => z(e) ? Po(e) : e, Ct = (e) => z(e) ? ao(e) : e;
function ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function un(e) {
  return ks(e, !1);
}
function ks(e, t) {
  return ne(e) ? e : new Us(e, t);
}
class Us {
  constructor(t, n) {
    this.dep = new To(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : Fe(t), this.__v_isShallow = n;
  }
  get value() {
    return J.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || pe(t) || Re(t);
    t = o ? t : j(t), st(t, n) && (this._rawValue = t, this._value = o ? t : Fe(t), J.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function rr(e) {
  return ne(e) ? e.value : e;
}
const Bs = {
  get: (e, t, n) => t === "__v_raw" ? e : rr(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return ne(i) && !ne(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function sr(e) {
  return lt(e) ? e : new Proxy(e, Bs);
}
class Ws {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new To(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    K !== this)
      return Ki(this, !0), !0;
  }
  get value() {
    const t = J.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return zi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : J.NODE_ENV !== "production" && Ae("Write operation failed: computed value is readonly");
  }
}
function Ks(e, t, n = !1) {
  let o, i;
  return M(e) ? o = e : (o = e.get, i = e.set), new Ws(o, i, n);
}
const fn = {}, vn = /* @__PURE__ */ new WeakMap();
let pt;
function Gs(e, t = !1, n = pt) {
  if (n) {
    let o = vn.get(n);
    o || vn.set(n, o = []), o.push(e);
  } else J.NODE_ENV !== "production" && !t && Ae(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function qs(e, t, n = q) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: l, call: f } = n, h = (N) => {
    (n.onWarn || Ae)(
      "Invalid watch source: ",
      N,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (N) => i ? N : pe(N) || i === !1 || i === 0 ? rt(N, 1) : rt(N);
  let a, _, D, I, T = !1, te = !1;
  if (ne(e) ? (_ = () => e.value, T = pe(e)) : lt(e) ? (_ = () => d(e), T = !0) : $(e) ? (te = !0, T = e.some((N) => lt(N) || pe(N)), _ = () => e.map((N) => {
    if (ne(N))
      return N.value;
    if (lt(N))
      return d(N);
    if (M(N))
      return f ? f(N, 2) : N();
    J.NODE_ENV !== "production" && h(N);
  })) : M(e) ? t ? _ = f ? () => f(e, 2) : e : _ = () => {
    if (D) {
      Ie();
      try {
        D();
      } finally {
        Me();
      }
    }
    const N = pt;
    pt = a;
    try {
      return f ? f(e, 3, [I]) : e(I);
    } finally {
      pt = N;
    }
  } : (_ = re, J.NODE_ENV !== "production" && h(e)), t && i) {
    const N = _, O = i === !0 ? 1 / 0 : i;
    _ = () => rt(N(), O);
  }
  const X = ys(), W = () => {
    a.stop(), X && X.active && Oo(X.effects, a);
  };
  if (r && t) {
    const N = t;
    t = (...O) => {
      N(...O), W();
    };
  }
  let L = te ? new Array(e.length).fill(fn) : fn;
  const ce = (N) => {
    if (!(!(a.flags & 1) || !a.dirty && !N))
      if (t) {
        const O = a.run();
        if (i || T || (te ? O.some((v, F) => st(v, L[F])) : st(O, L))) {
          D && D();
          const v = pt;
          pt = a;
          try {
            const F = [
              O,
              // pass undefined as the old value when it's changed for the first time
              L === fn ? void 0 : te && L[0] === fn ? [] : L,
              I
            ];
            L = O, f ? f(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            pt = v;
          }
        }
      } else
        a.run();
  };
  return l && l(ce), a = new Bi(_), a.scheduler = s ? () => s(ce, !1) : ce, I = (N) => Gs(N, !1, a), D = a.onStop = () => {
    const N = vn.get(a);
    if (N) {
      if (f)
        f(N, 4);
      else
        for (const O of N) O();
      vn.delete(a);
    }
  }, J.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ce(!0) : L = a.run() : s ? s(ce.bind(null, !0), !0) : a.run(), W.pause = a.pause.bind(a), W.resume = a.resume.bind(a), W.stop = W, W;
}
function rt(e, t = 1 / 0, n) {
  if (t <= 0 || !z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, ne(e))
    rt(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      rt(e[o], t, n);
  else if (Fi(e) || ht(e))
    e.forEach((o) => {
      rt(o, t, n);
    });
  else if (An(e)) {
    for (const o in e)
      rt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && rt(e[o], t, n);
  }
  return e;
}
var p = {};
const _t = [];
function an(e) {
  _t.push(e);
}
function dn() {
  _t.pop();
}
let Zn = !1;
function V(e, ...t) {
  if (Zn) return;
  Zn = !0, Ie();
  const n = _t.length ? _t[_t.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = zs();
  if (o)
    Tt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, l;
          return (l = (s = r.toString) == null ? void 0 : s.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${rn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Js(i)), console.warn(...r);
  }
  Me(), Zn = !1;
}
function zs() {
  let e = _t[_t.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Js(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ys(n));
  }), t;
}
function Ys({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${rn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...Xs(e.props), r] : [i + r];
}
function Xs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...lr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function lr(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ne(t) ? (t = lr(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : M(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
const $o = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Tt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    en(i, t, n);
  }
}
function qe(e, t, n, o) {
  if (M(e)) {
    const i = Tt(e, t, n, o);
    return i && wo(i) && i.catch((r) => {
      en(r, t, n);
    }), i;
  }
  if ($(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(qe(e[r], t, n, o));
    return i;
  } else p.NODE_ENV !== "production" && V(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function en(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || q;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = p.NODE_ENV !== "production" ? $o[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let a = 0; a < d.length; a++)
          if (d[a](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ie(), Tt(r, null, 10, [
        e,
        f,
        h
      ]), Me();
      return;
    }
  }
  Zs(e, n, i, o, s);
}
function Zs(e, t, n, o = !0, i = !1) {
  if (p.NODE_ENV !== "production") {
    const r = $o[t];
    if (n && an(n), V(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && dn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const de = [];
let Be = -1;
const Vt = [];
let ot = null, wt = 0;
const cr = /* @__PURE__ */ Promise.resolve();
let On = null;
const Qs = 100;
function fr(e) {
  const t = On || cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function el(e) {
  let t = Be + 1, n = de.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = de[o], r = Jt(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Hn(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), n = de[de.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(n) ? de.push(e) : de.splice(el(t), 0, e), e.flags |= 1, ur();
  }
}
function ur() {
  On || (On = cr.then(pr));
}
function ar(e) {
  $(e) ? Vt.push(...e) : ot && e.id === -1 ? ot.splice(wt + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1), ur();
}
function ei(e, t, n = Be + 1) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < de.length; n++) {
    const o = de[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && Ao(t, o))
        continue;
      de.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function dr(e) {
  if (Vt.length) {
    const t = [...new Set(Vt)].sort(
      (n, o) => Jt(n) - Jt(o)
    );
    if (Vt.length = 0, ot) {
      ot.push(...t);
      return;
    }
    for (ot = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), wt = 0; wt < ot.length; wt++) {
      const n = ot[wt];
      p.NODE_ENV !== "production" && Ao(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ot = null, wt = 0;
  }
}
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pr(e) {
  p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => Ao(e, n) : re;
  try {
    for (Be = 0; Be < de.length; Be++) {
      const n = de[Be];
      if (n && !(n.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Tt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Be < de.length; Be++) {
      const n = de[Be];
      n && (n.flags &= -2);
    }
    Be = -1, de.length = 0, dr(e), On = null, (de.length || Vt.length) && pr(e);
  }
}
function Ao(e, t) {
  const n = e.get(t) || 0;
  if (n > Qs) {
    const o = t.i, i = o && Jr(o.type);
    return en(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Te = !1;
const pn = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (Qt().__VUE_HMR_RUNTIME__ = {
  createRecord: Qn(hr),
  rerender: Qn(ol),
  reload: Qn(il)
});
const bt = /* @__PURE__ */ new Map();
function tl(e) {
  const t = e.type.__hmrId;
  let n = bt.get(t);
  n || (hr(t, e.type), n = bt.get(t)), n.instances.add(e);
}
function nl(e) {
  bt.get(e.type.__hmrId).instances.delete(e);
}
function hr(e, t) {
  return bt.has(e) ? !1 : (bt.set(e, {
    initialDef: wn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function wn(e) {
  return Yr(e) ? e.__vccOpts : e;
}
function ol(e, t) {
  const n = bt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, wn(o.type).render = t), o.renderCache = [], Te = !0, o.job.flags & 8 || o.update(), Te = !1;
  }));
}
function il(e, t) {
  const n = bt.get(e);
  if (!n) return;
  t = wn(t), ti(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = wn(r.type);
    let l = pn.get(s);
    l || (s !== n.initialDef && ti(s, t), pn.set(s, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Hn(() => {
      r.job.flags & 8 || (Te = !0, r.parent.update(), Te = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  ar(() => {
    pn.clear();
  });
}
function ti(e, t) {
  Q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Qn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ke, Lt = [], po = !1;
function tn(e, ...t) {
  Ke ? Ke.emit(e, ...t) : po || Lt.push({ event: e, args: t });
}
function gr(e, t) {
  var n, o;
  Ke = e, Ke ? (Ke.enabled = !0, Lt.forEach(({ event: i, args: r }) => Ke.emit(i, ...r)), Lt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gr(r, t);
  }), setTimeout(() => {
    Ke || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, po = !0, Lt = []);
  }, 3e3)) : (po = !0, Lt = []);
}
function rl(e, t) {
  tn("app:init", e, t, {
    Fragment: ye,
    Text: nn,
    Comment: Ve,
    Static: _n
  });
}
function sl(e) {
  tn("app:unmount", e);
}
const ll = /* @__PURE__ */ Io(
  "component:added"
  /* COMPONENT_ADDED */
), _r = /* @__PURE__ */ Io(
  "component:updated"
  /* COMPONENT_UPDATED */
), cl = /* @__PURE__ */ Io(
  "component:removed"
  /* COMPONENT_REMOVED */
), fl = (e) => {
  Ke && typeof Ke.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ke.cleanupBuffer(e) && cl(e);
};
// @__NO_SIDE_EFFECTS__
function Io(e) {
  return (t) => {
    tn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ul = /* @__PURE__ */ mr(
  "perf:start"
  /* PERFORMANCE_START */
), al = /* @__PURE__ */ mr(
  "perf:end"
  /* PERFORMANCE_END */
);
function mr(e) {
  return (t, n, o) => {
    tn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function dl(e, t, n) {
  tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let xe = null, br = null;
function xn(e) {
  const t = xe;
  return xe = e, br = e && e.type.__scopeId || null, t;
}
function pl(e, t = xe, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && gi(-1);
    const r = xn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      xn(r), o._d && gi(1);
    }
    return p.NODE_ENV !== "production" && _r(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Er(e) {
  os(e) && V("Do not use built-in directive ids as custom directive id: " + e);
}
function ut(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    r && (l.oldValue = r[s].value);
    let f = l.dir[o];
    f && (Ie(), qe(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Me());
  }
}
function hl(e, t) {
  if (p.NODE_ENV !== "production" && (!oe || oe.isMounted) && V("provide() can only be used inside setup()."), oe) {
    let n = oe.provides;
    const o = oe.parent && oe.parent.provides;
    o === n && (n = oe.provides = Object.create(o)), n[e] = t;
  }
}
function hn(e, t, n = !1) {
  const o = Gr();
  if (o || St) {
    let i = St ? St._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && V(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && V("inject() can only be used inside setup() or functional components.");
}
const gl = /* @__PURE__ */ Symbol.for("v-scx"), _l = () => {
  {
    const e = hn(gl);
    return e || p.NODE_ENV !== "production" && V(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function eo(e, t, n) {
  return p.NODE_ENV !== "production" && !M(t) && V(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yr(e, t, n);
}
function yr(e, t, n = q) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  p.NODE_ENV !== "production" && !t && (o !== void 0 && V(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && V(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && V(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Q({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = V);
  const f = t && o || !t && r !== "post";
  let h;
  if (Xt) {
    if (r === "sync") {
      const D = _l();
      h = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!f) {
      const D = () => {
      };
      return D.stop = re, D.resume = re, D.pause = re, D;
    }
  }
  const d = oe;
  l.call = (D, I, T) => qe(D, d, I, T);
  let a = !1;
  r === "post" ? l.scheduler = (D) => {
    ve(D, d && d.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (D, I) => {
    I ? D() : Hn(D);
  }), l.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, d && (D.id = d.uid, D.i = d));
  };
  const _ = qs(e, t, l);
  return Xt && (h ? h.push(_) : f && _()), _;
}
function ml(e, t, n) {
  const o = this.proxy, i = ee(e) ? e.includes(".") ? Nr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  M(t) ? r = t : (r = t.handler, n = t);
  const s = on(this), l = yr(i, r.bind(o), n);
  return s(), l;
}
function Nr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const bl = /* @__PURE__ */ Symbol("_vte"), El = (e) => e.__isTeleport, yl = /* @__PURE__ */ Symbol("_leaveCb");
function Mo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Mo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t) {
  return M(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Q({ name: e.name }, t, { setup: e })
  ) : e;
}
function vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ni = /* @__PURE__ */ new WeakSet(), Dn = /* @__PURE__ */ new WeakMap();
function Wt(e, t, n, o, i = !1) {
  if ($(e)) {
    e.forEach(
      (T, te) => Wt(
        T,
        t && ($(t) ? t[te] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Kt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Wt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Bo(o.component) : o.el, s = i ? null : r, { i: l, r: f } = e;
  if (p.NODE_ENV !== "production" && !l) {
    V(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, d = l.refs === q ? l.refs = {} : l.refs, a = l.setupState, _ = j(a), D = a === q ? Ri : (T) => p.NODE_ENV !== "production" && (k(_, T) && !ne(_[T]) && V(
    `Template ref "${T}" used on a non-ref value. It will not work in the production build.`
  ), ni.has(_[T])) ? !1 : k(_, T), I = (T) => p.NODE_ENV === "production" || !ni.has(T);
  if (h != null && h !== f) {
    if (oi(t), ee(h))
      d[h] = null, D(h) && (a[h] = null);
    else if (ne(h)) {
      I(h) && (h.value = null);
      const T = t;
      T.k && (d[T.k] = null);
    }
  }
  if (M(f))
    Tt(f, l, 12, [s, d]);
  else {
    const T = ee(f), te = ne(f);
    if (T || te) {
      const X = () => {
        if (e.f) {
          const W = T ? D(f) ? a[f] : d[f] : I(f) || !e.k ? f.value : d[e.k];
          if (i)
            $(W) && Oo(W, r);
          else if ($(W))
            W.includes(r) || W.push(r);
          else if (T)
            d[f] = [r], D(f) && (a[f] = d[f]);
          else {
            const L = [r];
            I(f) && (f.value = L), e.k && (d[e.k] = L);
          }
        } else T ? (d[f] = s, D(f) && (a[f] = s)) : te ? (I(f) && (f.value = s), e.k && (d[e.k] = s)) : p.NODE_ENV !== "production" && V("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (s) {
        const W = () => {
          X(), Dn.delete(e);
        };
        W.id = -1, Dn.set(e, W), ve(W, n);
      } else
        oi(e), X();
    } else p.NODE_ENV !== "production" && V("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function oi(e) {
  const t = Dn.get(e);
  t && (t.flags |= 8, Dn.delete(e));
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, Fo = (e) => e.type.__isKeepAlive;
function Nl(e, t) {
  Or(e, "a", t);
}
function vl(e, t) {
  Or(e, "da", t);
}
function Or(e, t, n = oe) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (kn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Fo(i.parent.vnode) && Ol(o, t, n, i), i = i.parent;
  }
}
function Ol(e, t, n, o) {
  const i = kn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  wr(() => {
    Oo(o[t], i);
  }, n);
}
function kn(e, t, n = oe, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      Ie();
      const l = on(n), f = qe(t, n, e, s);
      return l(), Me(), f;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (p.NODE_ENV !== "production") {
    const i = dt($o[e].replace(/ hook$/, ""));
    V(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const et = (e) => (t, n = oe) => {
  (!Xt || e === "sp") && kn(e, (...o) => t(...o), n);
}, wl = et("bm"), xl = et("m"), Dl = et(
  "bu"
), Vl = et("u"), Sl = et(
  "bum"
), wr = et("um"), Cl = et(
  "sp"
), Tl = et("rtg"), Pl = et("rtc");
function $l(e, t = oe) {
  kn("ec", e, t);
}
const Al = /* @__PURE__ */ Symbol.for("v-ndc");
function to(e, t, n, o) {
  let i;
  const r = n, s = $(e);
  if (s || ee(e)) {
    const l = s && lt(e);
    let f = !1, h = !1;
    l && (f = !pe(e), h = Re(e), e = Fn(e)), i = new Array(e.length);
    for (let d = 0, a = e.length; d < a; d++)
      i[d] = t(
        f ? h ? Ct(Fe(e[d])) : Fe(e[d]) : e[d],
        d,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && V(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (z(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, f) => t(l, f, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const d = l[f];
        i[f] = t(e[d], d, f, r);
      }
    }
  else
    i = [];
  return i;
}
const ho = (e) => e ? qr(e) ? Bo(e) : ho(e.parent) : null, mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Ge(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Ge(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Ge(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Ge(e.refs) : e.refs,
    $parent: (e) => ho(e.parent),
    $root: (e) => ho(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fr.bind(e.proxy)),
    $watch: (e) => ml.bind(e)
  })
), jo = (e) => e === "_" || e === "$", no = (e, t) => e !== q && !e.__isScriptSetup && k(e, t), xr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: l, appContext: f } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const _ = s[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (no(o, t))
          return s[t] = 1, o[t];
        if (i !== q && k(i, t))
          return s[t] = 2, i[t];
        if (k(r, t))
          return s[t] = 3, r[t];
        if (n !== q && k(n, t))
          return s[t] = 4, n[t];
        go && (s[t] = 0);
      }
    }
    const h = mt[t];
    let d, a;
    if (h)
      return t === "$attrs" ? (ie(e.attrs, "get", ""), p.NODE_ENV !== "production" && Sn()) : p.NODE_ENV !== "production" && t === "$slots" && ie(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== q && k(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      a = f.config.globalProperties, k(a, t)
    )
      return a[t];
    p.NODE_ENV !== "production" && xe && (!ee(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== q && jo(t[0]) && k(i, t) ? V(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === xe && V(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return no(i, t) ? (i[t] = n, !0) : p.NODE_ENV !== "production" && i.__isScriptSetup && k(i, t) ? (V(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== q && k(o, t) ? (o[t] = n, !0) : k(e.props, t) ? (p.NODE_ENV !== "production" && V(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && V(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, props: r, type: s }
  }, l) {
    let f;
    return !!(n[l] || e !== q && l[0] !== "$" && k(e, l) || no(t, l) || k(r, l) || k(o, l) || k(mt, l) || k(i.config.globalProperties, l) || (f = s.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : k(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (xr.ownKeys = (e) => (V(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Il(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(mt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => mt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: re
    });
  }), t;
}
function Ml(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: re
    });
  });
}
function Rl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (jo(o[0])) {
        V(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: re
      });
    }
  });
}
function ii(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Fl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? V(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let go = !0;
function jl(e) {
  const t = Vr(e), n = e.proxy, o = e.ctx;
  go = !1, t.beforeCreate && ri(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: a,
    mounted: _,
    beforeUpdate: D,
    updated: I,
    activated: T,
    deactivated: te,
    beforeDestroy: X,
    beforeUnmount: W,
    destroyed: L,
    unmounted: ce,
    render: N,
    renderTracked: O,
    renderTriggered: v,
    errorCaptured: F,
    serverPrefetch: Z,
    // public API
    expose: fe,
    inheritAttrs: he,
    // assets
    components: se,
    directives: Et,
    filters: Wn
  } = t, ze = p.NODE_ENV !== "production" ? Fl() : null;
  if (p.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const H in U)
        ze("Props", H);
  }
  if (h && Ll(h, o, ze), s)
    for (const U in s) {
      const H = s[U];
      M(H) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, U, {
        value: H.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[U] = H.bind(n), p.NODE_ENV !== "production" && ze("Methods", U)) : p.NODE_ENV !== "production" && V(
        `Method "${U}" has type "${typeof H}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    p.NODE_ENV !== "production" && !M(i) && V(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = i.call(n, n);
    if (p.NODE_ENV !== "production" && wo(U) && V(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !z(U))
      p.NODE_ENV !== "production" && V("data() should return an object.");
    else if (e.data = Po(U), p.NODE_ENV !== "production")
      for (const H in U)
        ze("Data", H), jo(H[0]) || Object.defineProperty(o, H, {
          configurable: !0,
          enumerable: !0,
          get: () => U[H],
          set: re
        });
  }
  if (go = !0, r)
    for (const U in r) {
      const H = r[U], je = M(H) ? H.bind(n, n) : M(H.get) ? H.get.bind(n, n) : re;
      p.NODE_ENV !== "production" && je === re && V(`Computed property "${U}" has no getter.`);
      const Kn = !M(H) && M(H.set) ? H.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        V(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : re, Pt = Pn({
        get: je,
        set: Kn
      });
      Object.defineProperty(o, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Pt.value,
        set: (yt) => Pt.value = yt
      }), p.NODE_ENV !== "production" && ze("Computed", U);
    }
  if (l)
    for (const U in l)
      Dr(l[U], o, n, U);
  if (f) {
    const U = M(f) ? f.call(n) : f;
    Reflect.ownKeys(U).forEach((H) => {
      hl(H, U[H]);
    });
  }
  d && ri(d, e, "c");
  function ge(U, H) {
    $(H) ? H.forEach((je) => U(je.bind(n))) : H && U(H.bind(n));
  }
  if (ge(wl, a), ge(xl, _), ge(Dl, D), ge(Vl, I), ge(Nl, T), ge(vl, te), ge($l, F), ge(Pl, O), ge(Tl, v), ge(Sl, W), ge(wr, ce), ge(Cl, Z), $(fe))
    if (fe.length) {
      const U = e.exposed || (e.exposed = {});
      fe.forEach((H) => {
        Object.defineProperty(U, H, {
          get: () => n[H],
          set: (je) => n[H] = je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === re && (e.render = N), he != null && (e.inheritAttrs = he), se && (e.components = se), Et && (e.directives = Et), Z && vr(e);
}
function Ll(e, t, n = re) {
  $(e) && (e = _o(e));
  for (const o in e) {
    const i = e[o];
    let r;
    z(i) ? "default" in i ? r = hn(
      i.from || o,
      i.default,
      !0
    ) : r = hn(i.from || o) : r = hn(i), ne(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ri(e, t, n) {
  qe(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Dr(e, t, n, o) {
  let i = o.includes(".") ? Nr(n, o) : () => n[o];
  if (ee(e)) {
    const r = t[e];
    M(r) ? eo(i, r) : p.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e}"`, r);
  } else if (M(e))
    eo(i, e.bind(n));
  else if (z(e))
    if ($(e))
      e.forEach((r) => Dr(r, t, n, o));
    else {
      const r = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(r) ? eo(i, r, e) : p.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else p.NODE_ENV !== "production" && V(`Invalid watch option: "${o}"`, e);
}
function Vr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !i.length && !n && !o ? f = t : (f = {}, i.length && i.forEach(
    (h) => Vn(f, h, s, !0)
  ), Vn(f, t, s)), z(t) && r.set(t, f), f;
}
function Vn(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && Vn(e, r, n, !0), i && i.forEach(
    (s) => Vn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      p.NODE_ENV !== "production" && V(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Hl[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Hl = {
  data: si,
  props: li,
  emits: li,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: Ul,
  // provide / inject
  provide: si,
  inject: kl
};
function si(e, t) {
  return t ? e ? function() {
    return Q(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function kl(e, t) {
  return Ht(_o(e), _o(t));
}
function _o(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? Q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function li(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Q(
    /* @__PURE__ */ Object.create(null),
    ii(e),
    ii(t ?? {})
  ) : t;
}
function Ul(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ae(e[o], t[o]);
  return n;
}
function Sr() {
  return {
    app: null,
    config: {
      isNativeTag: Ri,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Bl = 0;
function Wl(e, t) {
  return function(o, i = null) {
    M(o) || (o = Q({}, o)), i != null && !z(i) && (p.NODE_ENV !== "production" && V("root props passed to app.mount() must be an object."), i = null);
    const r = Sr(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = r.app = {
      _uid: Bl++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ei,
      get config() {
        return r.config;
      },
      set config(d) {
        p.NODE_ENV !== "production" && V(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...a) {
        return s.has(d) ? p.NODE_ENV !== "production" && V("Plugin has already been applied to target app.") : d && M(d.install) ? (s.add(d), d.install(h, ...a)) : M(d) ? (s.add(d), d(h, ...a)) : p.NODE_ENV !== "production" && V(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(d) {
        return r.mixins.includes(d) ? p.NODE_ENV !== "production" && V(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), h;
      },
      component(d, a) {
        return p.NODE_ENV !== "production" && No(d, r.config), a ? (p.NODE_ENV !== "production" && r.components[d] && V(`Component "${d}" has already been registered in target app.`), r.components[d] = a, h) : r.components[d];
      },
      directive(d, a) {
        return p.NODE_ENV !== "production" && Er(d), a ? (p.NODE_ENV !== "production" && r.directives[d] && V(`Directive "${d}" has already been registered in target app.`), r.directives[d] = a, h) : r.directives[d];
      },
      mount(d, a, _) {
        if (f)
          p.NODE_ENV !== "production" && V(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && d.__vue_app__ && V(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = h._ceVNode || $e(o, i);
          return D.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), p.NODE_ENV !== "production" && (r.reload = () => {
            const I = ct(D);
            I.el = null, e(I, d, _);
          }), e(D, d, _), f = !0, h._container = d, d.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = D.component, rl(h, Ei)), Bo(D.component);
        }
      },
      onUnmount(d) {
        p.NODE_ENV !== "production" && typeof d != "function" && V(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (qe(
          l,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, sl(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && V("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return p.NODE_ENV !== "production" && d in r.provides && (k(r.provides, d) ? V(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : V(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[d] = a, h;
      },
      runWithContext(d) {
        const a = St;
        St = h;
        try {
          return d();
        } finally {
          St = a;
        }
      }
    };
    return h;
  };
}
let St = null;
const Kl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${we(t)}Modifiers`];
function Gl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || q;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [a]
    } = e;
    if (d)
      if (!(t in d))
        (!a || !(dt(Ne(t)) in a)) && V(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${dt(Ne(t))}" prop.`
        );
      else {
        const _ = d[t];
        M(_) && (_(...n) || V(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && Kl(o, t.slice(7));
  if (s && (s.trim && (i = n.map((d) => ee(d) ? d.trim() : d)), s.number && (i = n.map(ss))), p.NODE_ENV !== "production" && dl(e, t, i), p.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[dt(d)] && V(
      `Event "${d}" is emitted in component ${rn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${we(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = dt(t)] || // also try camelCase event handler (#2249)
  o[l = dt(Ne(t))];
  !f && r && (f = o[l = dt(we(t))]), f && qe(
    f,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, qe(
      h,
      e,
      6,
      i
    );
  }
}
const ql = /* @__PURE__ */ new WeakMap();
function Cr(e, t, n = !1) {
  const o = n ? ql : t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, l = !1;
  if (!M(e)) {
    const f = (h) => {
      const d = Cr(h, t, !0);
      d && (l = !0, Q(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? (z(e) && o.set(e, null), null) : ($(r) ? r.forEach((f) => s[f] = null) : Q(s, r), z(e) && o.set(e, s), s);
}
function Un(e, t) {
  return !e || !Zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, we(t)) || k(e, t));
}
let mo = !1;
function Sn() {
  mo = !0;
}
function ci(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: l,
    emit: f,
    render: h,
    renderCache: d,
    props: a,
    data: _,
    setupState: D,
    ctx: I,
    inheritAttrs: T
  } = e, te = xn(e);
  let X, W;
  p.NODE_ENV !== "production" && (mo = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = i || o, O = p.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(N, {
        get(v, F, Z) {
          return V(
            `Property '${String(
              F
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(v, F, Z);
        }
      }) : N;
      X = Ce(
        h.call(
          O,
          N,
          d,
          p.NODE_ENV !== "production" ? Ge(a) : a,
          D,
          _,
          I
        )
      ), W = l;
    } else {
      const N = t;
      p.NODE_ENV !== "production" && l === a && Sn(), X = Ce(
        N.length > 1 ? N(
          p.NODE_ENV !== "production" ? Ge(a) : a,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return Sn(), Ge(l);
            },
            slots: s,
            emit: f
          } : { attrs: l, slots: s, emit: f }
        ) : N(
          p.NODE_ENV !== "production" ? Ge(a) : a,
          null
        )
      ), W = t.props ? l : zl(l);
    }
  } catch (N) {
    Gt.length = 0, en(N, e, 1), X = $e(Ve);
  }
  let L = X, ce;
  if (p.NODE_ENV !== "production" && X.patchFlag > 0 && X.patchFlag & 2048 && ([L, ce] = Tr(X)), W && T !== !1) {
    const N = Object.keys(W), { shapeFlag: O } = L;
    if (N.length) {
      if (O & 7)
        r && N.some(En) && (W = Jl(
          W,
          r
        )), L = ct(L, W, !1, !0);
      else if (p.NODE_ENV !== "production" && !mo && L.type !== Ve) {
        const v = Object.keys(l), F = [], Z = [];
        for (let fe = 0, he = v.length; fe < he; fe++) {
          const se = v[fe];
          Zt(se) ? En(se) || F.push(se[2].toLowerCase() + se.slice(3)) : Z.push(se);
        }
        Z.length && V(
          `Extraneous non-props attributes (${Z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), F.length && V(
          `Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !fi(L) && V(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = ct(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !fi(L) && V(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Mo(L, n.transition)), p.NODE_ENV !== "production" && ce ? ce(L) : X = L, xn(te), X;
}
const Tr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Lo(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Tr(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ce(o), s];
};
function Lo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Bn(i)) {
      if (i.type !== Ve || i.children === "v-if") {
        if (n)
          return;
        if (n = i, p.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Lo(n.children);
      }
    } else
      return;
  }
  return n;
}
const zl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Jl = (e, t) => {
  const n = {};
  for (const o in e)
    (!En(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, fi = (e) => e.shapeFlag & 7 || e.type === Ve;
function Yl(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: l, patchFlag: f } = t, h = r.emitsOptions;
  if (p.NODE_ENV !== "production" && (i || l) && Te || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? ui(o, s, h) : !!s;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        const _ = d[a];
        if (s[_] !== o[_] && !Un(h, _))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? ui(o, s, h) : !0 : !!s;
  return !1;
}
function ui(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Un(n, r))
      return !0;
  }
  return !1;
}
function Xl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Pr = {}, $r = () => Object.create(Pr), Ar = (e) => Object.getPrototypeOf(e) === Pr;
function Zl(e, t, n, o = !1) {
  const i = {}, r = $r();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ir(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  p.NODE_ENV !== "production" && Rr(t || {}, i, e), n ? e.props = o ? i : Ls(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Ql(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function ec(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, l = j(i), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && Ql(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        let _ = d[a];
        if (Un(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (f)
          if (k(r, _))
            D !== r[_] && (r[_] = D, h = !0);
          else {
            const I = Ne(_);
            i[I] = bo(
              f,
              l,
              I,
              D,
              e,
              !1
            );
          }
        else
          D !== r[_] && (r[_] = D, h = !0);
      }
    }
  } else {
    Ir(e, t, i, r) && (h = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
      !k(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = we(a)) === a || !k(t, d))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[a] = bo(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (r !== l)
      for (const a in r)
        (!t || !k(t, a)) && (delete r[a], h = !0);
  }
  h && We(e.attrs, "set", ""), p.NODE_ENV !== "production" && Rr(t || {}, i, e);
}
function Ir(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let f in t) {
      if (kt(f))
        continue;
      const h = t[f];
      let d;
      i && k(i, d = Ne(f)) ? !r || !r.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Un(e.emitsOptions, f) || (!(f in o) || h !== o[f]) && (o[f] = h, s = !0);
    }
  if (r) {
    const f = j(n), h = l || q;
    for (let d = 0; d < r.length; d++) {
      const a = r[d];
      n[a] = bo(
        i,
        f,
        a,
        h[a],
        e,
        !k(h, a)
      );
    }
  }
  return s;
}
function bo(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const l = k(s, "default");
    if (l && o === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && M(f)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const d = on(i);
          o = h[n] = f.call(
            null,
            t
          ), d();
        }
      } else
        o = f;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === we(n)) && (o = !0));
  }
  return o;
}
const tc = /* @__PURE__ */ new WeakMap();
function Mr(e, t, n = !1) {
  const o = n ? tc : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, l = [];
  let f = !1;
  if (!M(e)) {
    const d = (a) => {
      f = !0;
      const [_, D] = Mr(a, t, !0);
      Q(s, _), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !f)
    return z(e) && o.set(e, xt), xt;
  if ($(r))
    for (let d = 0; d < r.length; d++) {
      p.NODE_ENV !== "production" && !ee(r[d]) && V("props must be strings when using array syntax.", r[d]);
      const a = Ne(r[d]);
      ai(a) && (s[a] = q);
    }
  else if (r) {
    p.NODE_ENV !== "production" && !z(r) && V("invalid props options", r);
    for (const d in r) {
      const a = Ne(d);
      if (ai(a)) {
        const _ = r[d], D = s[a] = $(_) || M(_) ? { type: _ } : Q({}, _), I = D.type;
        let T = !1, te = !0;
        if ($(I))
          for (let X = 0; X < I.length; ++X) {
            const W = I[X], L = M(W) && W.name;
            if (L === "Boolean") {
              T = !0;
              break;
            } else L === "String" && (te = !1);
          }
        else
          T = M(I) && I.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = T, D[
          1
          /* shouldCastTrue */
        ] = te, (T || k(D, "default")) && l.push(a);
      }
    }
  }
  const h = [s, l];
  return z(e) && o.set(e, h), h;
}
function ai(e) {
  return e[0] !== "$" && !kt(e) ? !0 : (p.NODE_ENV !== "production" && V(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function nc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Rr(e, t, n) {
  const o = j(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => Ne(s));
  for (const s in i) {
    let l = i[s];
    l != null && oc(
      s,
      o[s],
      l,
      p.NODE_ENV !== "production" ? Ge(o) : o,
      !r.includes(s)
    );
  }
}
function oc(e, t, n, o, i) {
  const { type: r, required: s, validator: l, skipCheck: f } = n;
  if (s && i) {
    V('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !f) {
      let h = !1;
      const d = $(r) ? r : [r], a = [];
      for (let _ = 0; _ < d.length && !h; _++) {
        const { valid: D, expectedType: I } = rc(t, d[_]);
        a.push(I || ""), h = D;
      }
      if (!h) {
        V(sc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && V('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ic = /* @__PURE__ */ Qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function rc(e, t) {
  let n;
  const o = nc(t);
  if (o === "null")
    n = e === null;
  else if (ic(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = z(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function sc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Mn).join(" | ")}`;
  const i = n[0], r = xo(t), s = di(t, i), l = di(t, r);
  return n.length === 1 && pi(i) && !lc(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, pi(r) && (o += `with value ${l}.`), o;
}
function di(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function pi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function lc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ho = (e) => e === "_" || e === "_ctx" || e === "$stable", ko = (e) => $(e) ? e.map(Ce) : [Ce(e)], cc = (e, t, n) => {
  if (t._n)
    return t;
  const o = pl((...i) => (p.NODE_ENV !== "production" && oe && !(n === null && xe) && !(n && n.root !== oe.root) && V(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ko(t(...i))), n);
  return o._c = !1, o;
}, Fr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Ho(i)) continue;
    const r = e[i];
    if (M(r))
      t[i] = cc(i, r, o);
    else if (r != null) {
      p.NODE_ENV !== "production" && V(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = ko(r);
      t[i] = () => s;
    }
  }
}, jr = (e, t) => {
  p.NODE_ENV !== "production" && !Fo(e.vnode) && V(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ko(t);
  e.slots.default = () => n;
}, Eo = (e, t, n) => {
  for (const o in t)
    (n || !Ho(o)) && (e[o] = t[o]);
}, fc = (e, t, n) => {
  const o = e.slots = $r();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Eo(o, t, n), n && yn(o, "_", i, !0)) : Fr(t, o);
  } else t && jr(e, t);
}, uc = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = q;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && Te ? (Eo(i, t, n), We(e, "set", "$slots")) : n && l === 1 ? r = !1 : Eo(i, t, n) : (r = !t.$stable, Fr(t, i)), s = t;
  } else t && (jr(e, t), s = { default: 1 });
  if (r)
    for (const l in i)
      !Ho(l) && s[l] == null && delete i[l];
};
let Ft, Ze;
function vt(e, t) {
  e.appContext.config.performance && Cn() && Ze.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && ul(e, t, Cn() ? Ze.now() : Date.now());
}
function Ot(e, t) {
  if (e.appContext.config.performance && Cn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", i = `<${rn(e, e.type)}> ${t}`;
    Ze.mark(o), Ze.measure(i, n, o), Ze.clearMeasures(i), Ze.clearMarks(n), Ze.clearMarks(o);
  }
  p.NODE_ENV !== "production" && al(e, t, Cn() ? Ze.now() : Date.now());
}
function Cn() {
  return Ft !== void 0 || (typeof window < "u" && window.performance ? (Ft = !0, Ze = window.performance) : Ft = !1), Ft;
}
function ac() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ve = _c;
function dc(e) {
  return pc(e);
}
function pc(e, t) {
  ac();
  const n = Qt();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && gr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: d,
    parentNode: a,
    nextSibling: _,
    setScopeId: D = re,
    insertStaticContent: I
  } = e, T = (c, u, g, y = null, b = null, m = null, S = void 0, w = null, x = p.NODE_ENV !== "production" && Te ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !jt(c, u) && (y = sn(c), tt(c, b, m, !0), c = null), u.patchFlag === -2 && (x = !1, u.dynamicChildren = null);
    const { type: E, ref: A, shapeFlag: C } = u;
    switch (E) {
      case nn:
        te(c, u, g, y);
        break;
      case Ve:
        X(c, u, g, y);
        break;
      case _n:
        c == null ? W(u, g, y, S) : p.NODE_ENV !== "production" && L(c, u, g, S);
        break;
      case ye:
        Et(
          c,
          u,
          g,
          y,
          b,
          m,
          S,
          w,
          x
        );
        break;
      default:
        C & 1 ? O(
          c,
          u,
          g,
          y,
          b,
          m,
          S,
          w,
          x
        ) : C & 6 ? Wn(
          c,
          u,
          g,
          y,
          b,
          m,
          S,
          w,
          x
        ) : C & 64 || C & 128 ? E.process(
          c,
          u,
          g,
          y,
          b,
          m,
          S,
          w,
          x,
          At
        ) : p.NODE_ENV !== "production" && V("Invalid VNode type:", E, `(${typeof E})`);
    }
    A != null && b ? Wt(A, c && c.ref, m, u || c, !u) : A == null && c && c.ref != null && Wt(c.ref, null, m, c, !0);
  }, te = (c, u, g, y) => {
    if (c == null)
      o(
        u.el = l(u.children),
        g,
        y
      );
    else {
      const b = u.el = c.el;
      if (u.children !== c.children)
        if (p.NODE_ENV !== "production" && Te && u.patchFlag === -1 && "__elIndex" in c) {
          const m = g.childNodes, S = l(u.children), w = m[u.__elIndex = c.__elIndex];
          o(S, g, w), i(w);
        } else
          h(b, u.children);
    }
  }, X = (c, u, g, y) => {
    c == null ? o(
      u.el = f(u.children || ""),
      g,
      y
    ) : u.el = c.el;
  }, W = (c, u, g, y) => {
    [c.el, c.anchor] = I(
      c.children,
      u,
      g,
      y,
      c.el,
      c.anchor
    );
  }, L = (c, u, g, y) => {
    if (u.children !== c.children) {
      const b = _(c.anchor);
      N(c), [u.el, u.anchor] = I(
        u.children,
        g,
        b,
        y
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, ce = ({ el: c, anchor: u }, g, y) => {
    let b;
    for (; c && c !== u; )
      b = _(c), o(c, g, y), c = b;
    o(u, g, y);
  }, N = ({ el: c, anchor: u }) => {
    let g;
    for (; c && c !== u; )
      g = _(c), i(c), c = g;
    i(u);
  }, O = (c, u, g, y, b, m, S, w, x) => {
    if (u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), c == null)
      v(
        u,
        g,
        y,
        b,
        m,
        S,
        w,
        x
      );
    else {
      const E = c.el && c.el._isVueCE ? c.el : null;
      try {
        E && E._beginPatch(), fe(
          c,
          u,
          b,
          m,
          S,
          w,
          x
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, v = (c, u, g, y, b, m, S, w) => {
    let x, E;
    const { props: A, shapeFlag: C, transition: P, dirs: R } = c;
    if (x = c.el = s(
      c.type,
      m,
      A && A.is,
      A
    ), C & 8 ? d(x, c.children) : C & 16 && Z(
      c.children,
      x,
      null,
      y,
      b,
      oo(c, m),
      S,
      w
    ), R && ut(c, null, y, "created"), F(x, c, c.scopeId, S, y), A) {
      for (const Y in A)
        Y !== "value" && !kt(Y) && r(x, Y, null, A[Y], m, y);
      "value" in A && r(x, "value", null, A.value, m), (E = A.onVnodeBeforeMount) && Ue(E, y, c);
    }
    p.NODE_ENV !== "production" && (yn(x, "__vnode", c, !0), yn(x, "__vueParentComponent", y, !0)), R && ut(c, null, y, "beforeMount");
    const B = hc(b, P);
    B && P.beforeEnter(x), o(x, u, g), ((E = A && A.onVnodeMounted) || B || R) && ve(() => {
      E && Ue(E, y, c), B && P.enter(x), R && ut(c, null, y, "mounted");
    }, b);
  }, F = (c, u, g, y, b) => {
    if (g && D(c, g), y)
      for (let m = 0; m < y.length; m++)
        D(c, y[m]);
    if (b) {
      let m = b.subTree;
      if (p.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && (m = Lo(m.children) || m), u === m || kr(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const S = b.vnode;
        F(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          b.parent
        );
      }
    }
  }, Z = (c, u, g, y, b, m, S, w, x = 0) => {
    for (let E = x; E < c.length; E++) {
      const A = c[E] = w ? it(c[E]) : Ce(c[E]);
      T(
        null,
        A,
        u,
        g,
        y,
        b,
        m,
        S,
        w
      );
    }
  }, fe = (c, u, g, y, b, m, S) => {
    const w = u.el = c.el;
    p.NODE_ENV !== "production" && (w.__vnode = u);
    let { patchFlag: x, dynamicChildren: E, dirs: A } = u;
    x |= c.patchFlag & 16;
    const C = c.props || q, P = u.props || q;
    let R;
    if (g && at(g, !1), (R = P.onVnodeBeforeUpdate) && Ue(R, g, u, c), A && ut(u, c, g, "beforeUpdate"), g && at(g, !0), p.NODE_ENV !== "production" && Te && (x = 0, S = !1, E = null), (C.innerHTML && P.innerHTML == null || C.textContent && P.textContent == null) && d(w, ""), E ? (he(
      c.dynamicChildren,
      E,
      w,
      g,
      y,
      oo(u, b),
      m
    ), p.NODE_ENV !== "production" && gn(c, u)) : S || je(
      c,
      u,
      w,
      null,
      g,
      y,
      oo(u, b),
      m,
      !1
    ), x > 0) {
      if (x & 16)
        se(w, C, P, g, b);
      else if (x & 2 && C.class !== P.class && r(w, "class", null, P.class, b), x & 4 && r(w, "style", C.style, P.style, b), x & 8) {
        const B = u.dynamicProps;
        for (let Y = 0; Y < B.length; Y++) {
          const G = B[Y], _e = C[G], me = P[G];
          (me !== _e || G === "value") && r(w, G, _e, me, b, g);
        }
      }
      x & 1 && c.children !== u.children && d(w, u.children);
    } else !S && E == null && se(w, C, P, g, b);
    ((R = P.onVnodeUpdated) || A) && ve(() => {
      R && Ue(R, g, u, c), A && ut(u, c, g, "updated");
    }, y);
  }, he = (c, u, g, y, b, m, S) => {
    for (let w = 0; w < u.length; w++) {
      const x = c[w], E = u[w], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(x, E) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? a(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      T(
        x,
        E,
        A,
        null,
        y,
        b,
        m,
        S,
        !0
      );
    }
  }, se = (c, u, g, y, b) => {
    if (u !== g) {
      if (u !== q)
        for (const m in u)
          !kt(m) && !(m in g) && r(
            c,
            m,
            u[m],
            null,
            b,
            y
          );
      for (const m in g) {
        if (kt(m)) continue;
        const S = g[m], w = u[m];
        S !== w && m !== "value" && r(c, m, w, S, b, y);
      }
      "value" in g && r(c, "value", u.value, g.value, b);
    }
  }, Et = (c, u, g, y, b, m, S, w, x) => {
    const E = u.el = c ? c.el : l(""), A = u.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: P, slotScopeIds: R } = u;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Te || C & 2048) && (C = 0, x = !1, P = null), R && (w = w ? w.concat(R) : R), c == null ? (o(E, g, y), o(A, g, y), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      g,
      A,
      b,
      m,
      S,
      w,
      x
    )) : C > 0 && C & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === P.length ? (he(
      c.dynamicChildren,
      P,
      g,
      b,
      m,
      S,
      w
    ), p.NODE_ENV !== "production" ? gn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || b && u === b.subTree) && gn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : je(
      c,
      u,
      g,
      A,
      b,
      m,
      S,
      w,
      x
    );
  }, Wn = (c, u, g, y, b, m, S, w, x) => {
    u.slotScopeIds = w, c == null ? u.shapeFlag & 512 ? b.ctx.activate(
      u,
      g,
      y,
      S,
      x
    ) : ze(
      u,
      g,
      y,
      b,
      m,
      S,
      x
    ) : ge(c, u, x);
  }, ze = (c, u, g, y, b, m, S) => {
    const w = c.component = Dc(
      c,
      y,
      b
    );
    if (p.NODE_ENV !== "production" && w.type.__hmrId && tl(w), p.NODE_ENV !== "production" && (an(c), vt(w, "mount")), Fo(c) && (w.ctx.renderer = At), p.NODE_ENV !== "production" && vt(w, "init"), Sc(w, !1, S), p.NODE_ENV !== "production" && Ot(w, "init"), p.NODE_ENV !== "production" && Te && (c.el = null), w.asyncDep) {
      if (b && b.registerDep(w, U, S), !c.el) {
        const x = w.subTree = $e(Ve);
        X(null, x, u, g), c.placeholder = x.el;
      }
    } else
      U(
        w,
        c,
        u,
        g,
        b,
        m,
        S
      );
    p.NODE_ENV !== "production" && (dn(), Ot(w, "mount"));
  }, ge = (c, u, g) => {
    const y = u.component = c.component;
    if (Yl(c, u, g))
      if (y.asyncDep && !y.asyncResolved) {
        p.NODE_ENV !== "production" && an(u), H(y, u, g), p.NODE_ENV !== "production" && dn();
        return;
      } else
        y.next = u, y.update();
    else
      u.el = c.el, y.vnode = u;
  }, U = (c, u, g, y, b, m, S) => {
    const w = () => {
      if (c.isMounted) {
        let { next: C, bu: P, u: R, parent: B, vnode: Y } = c;
        {
          const He = Lr(c);
          if (He) {
            C && (C.el = Y.el, H(c, C, S)), He.asyncDep.then(() => {
              c.isUnmounted || w();
            });
            return;
          }
        }
        let G = C, _e;
        p.NODE_ENV !== "production" && an(C || c.vnode), at(c, !1), C ? (C.el = Y.el, H(c, C, S)) : C = Y, P && Mt(P), (_e = C.props && C.props.onVnodeBeforeUpdate) && Ue(_e, B, C, Y), at(c, !0), p.NODE_ENV !== "production" && vt(c, "render");
        const me = ci(c);
        p.NODE_ENV !== "production" && Ot(c, "render");
        const Le = c.subTree;
        c.subTree = me, p.NODE_ENV !== "production" && vt(c, "patch"), T(
          Le,
          me,
          // parent may have changed if it's in a teleport
          a(Le.el),
          // anchor may have changed if it's in a fragment
          sn(Le),
          c,
          b,
          m
        ), p.NODE_ENV !== "production" && Ot(c, "patch"), C.el = me.el, G === null && Xl(c, me.el), R && ve(R, b), (_e = C.props && C.props.onVnodeUpdated) && ve(
          () => Ue(_e, B, C, Y),
          b
        ), p.NODE_ENV !== "production" && _r(c), p.NODE_ENV !== "production" && dn();
      } else {
        let C;
        const { el: P, props: R } = u, { bm: B, m: Y, parent: G, root: _e, type: me } = c, Le = Kt(u);
        at(c, !1), B && Mt(B), !Le && (C = R && R.onVnodeBeforeMount) && Ue(C, G, u), at(c, !0);
        {
          _e.ce && // @ts-expect-error _def is private
          _e.ce._def.shadowRoot !== !1 && _e.ce._injectChildStyle(me), p.NODE_ENV !== "production" && vt(c, "render");
          const He = c.subTree = ci(c);
          p.NODE_ENV !== "production" && Ot(c, "render"), p.NODE_ENV !== "production" && vt(c, "patch"), T(
            null,
            He,
            g,
            y,
            c,
            b,
            m
          ), p.NODE_ENV !== "production" && Ot(c, "patch"), u.el = He.el;
        }
        if (Y && ve(Y, b), !Le && (C = R && R.onVnodeMounted)) {
          const He = u;
          ve(
            () => Ue(C, G, He),
            b
          );
        }
        (u.shapeFlag & 256 || G && Kt(G.vnode) && G.vnode.shapeFlag & 256) && c.a && ve(c.a, b), c.isMounted = !0, p.NODE_ENV !== "production" && ll(c), u = g = y = null;
      }
    };
    c.scope.on();
    const x = c.effect = new Bi(w);
    c.scope.off();
    const E = c.update = x.run.bind(x), A = c.job = x.runIfDirty.bind(x);
    A.i = c, A.id = c.uid, x.scheduler = () => Hn(A), at(c, !0), p.NODE_ENV !== "production" && (x.onTrack = c.rtc ? (C) => Mt(c.rtc, C) : void 0, x.onTrigger = c.rtg ? (C) => Mt(c.rtg, C) : void 0), E();
  }, H = (c, u, g) => {
    u.component = c;
    const y = c.vnode.props;
    c.vnode = u, c.next = null, ec(c, u.props, y, g), uc(c, u.children, g), Ie(), ei(c), Me();
  }, je = (c, u, g, y, b, m, S, w, x = !1) => {
    const E = c && c.children, A = c ? c.shapeFlag : 0, C = u.children, { patchFlag: P, shapeFlag: R } = u;
    if (P > 0) {
      if (P & 128) {
        Pt(
          E,
          C,
          g,
          y,
          b,
          m,
          S,
          w,
          x
        );
        return;
      } else if (P & 256) {
        Kn(
          E,
          C,
          g,
          y,
          b,
          m,
          S,
          w,
          x
        );
        return;
      }
    }
    R & 8 ? (A & 16 && $t(E, b, m), C !== E && d(g, C)) : A & 16 ? R & 16 ? Pt(
      E,
      C,
      g,
      y,
      b,
      m,
      S,
      w,
      x
    ) : $t(E, b, m, !0) : (A & 8 && d(g, ""), R & 16 && Z(
      C,
      g,
      y,
      b,
      m,
      S,
      w,
      x
    ));
  }, Kn = (c, u, g, y, b, m, S, w, x) => {
    c = c || xt, u = u || xt;
    const E = c.length, A = u.length, C = Math.min(E, A);
    let P;
    for (P = 0; P < C; P++) {
      const R = u[P] = x ? it(u[P]) : Ce(u[P]);
      T(
        c[P],
        R,
        g,
        null,
        b,
        m,
        S,
        w,
        x
      );
    }
    E > A ? $t(
      c,
      b,
      m,
      !0,
      !1,
      C
    ) : Z(
      u,
      g,
      y,
      b,
      m,
      S,
      w,
      x,
      C
    );
  }, Pt = (c, u, g, y, b, m, S, w, x) => {
    let E = 0;
    const A = u.length;
    let C = c.length - 1, P = A - 1;
    for (; E <= C && E <= P; ) {
      const R = c[E], B = u[E] = x ? it(u[E]) : Ce(u[E]);
      if (jt(R, B))
        T(
          R,
          B,
          g,
          null,
          b,
          m,
          S,
          w,
          x
        );
      else
        break;
      E++;
    }
    for (; E <= C && E <= P; ) {
      const R = c[C], B = u[P] = x ? it(u[P]) : Ce(u[P]);
      if (jt(R, B))
        T(
          R,
          B,
          g,
          null,
          b,
          m,
          S,
          w,
          x
        );
      else
        break;
      C--, P--;
    }
    if (E > C) {
      if (E <= P) {
        const R = P + 1, B = R < A ? u[R].el : y;
        for (; E <= P; )
          T(
            null,
            u[E] = x ? it(u[E]) : Ce(u[E]),
            g,
            B,
            b,
            m,
            S,
            w,
            x
          ), E++;
      }
    } else if (E > P)
      for (; E <= C; )
        tt(c[E], b, m, !0), E++;
    else {
      const R = E, B = E, Y = /* @__PURE__ */ new Map();
      for (E = B; E <= P; E++) {
        const ue = u[E] = x ? it(u[E]) : Ce(u[E]);
        ue.key != null && (p.NODE_ENV !== "production" && Y.has(ue.key) && V(
          "Duplicate keys found during update:",
          JSON.stringify(ue.key),
          "Make sure keys are unique."
        ), Y.set(ue.key, E));
      }
      let G, _e = 0;
      const me = P - B + 1;
      let Le = !1, He = 0;
      const It = new Array(me);
      for (E = 0; E < me; E++) It[E] = 0;
      for (E = R; E <= C; E++) {
        const ue = c[E];
        if (_e >= me) {
          tt(ue, b, m, !0);
          continue;
        }
        let ke;
        if (ue.key != null)
          ke = Y.get(ue.key);
        else
          for (G = B; G <= P; G++)
            if (It[G - B] === 0 && jt(ue, u[G])) {
              ke = G;
              break;
            }
        ke === void 0 ? tt(ue, b, m, !0) : (It[ke - B] = E + 1, ke >= He ? He = ke : Le = !0, T(
          ue,
          u[ke],
          g,
          null,
          b,
          m,
          S,
          w,
          x
        ), _e++);
      }
      const Go = Le ? gc(It) : xt;
      for (G = Go.length - 1, E = me - 1; E >= 0; E--) {
        const ue = B + E, ke = u[ue], qo = u[ue + 1], zo = ue + 1 < A ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qo.el || Hr(qo)
        ) : y;
        It[E] === 0 ? T(
          null,
          ke,
          g,
          zo,
          b,
          m,
          S,
          w,
          x
        ) : Le && (G < 0 || E !== Go[G] ? yt(ke, g, zo, 2) : G--);
      }
    }
  }, yt = (c, u, g, y, b = null) => {
    const { el: m, type: S, transition: w, children: x, shapeFlag: E } = c;
    if (E & 6) {
      yt(c.component.subTree, u, g, y);
      return;
    }
    if (E & 128) {
      c.suspense.move(u, g, y);
      return;
    }
    if (E & 64) {
      S.move(c, u, g, At);
      return;
    }
    if (S === ye) {
      o(m, u, g);
      for (let C = 0; C < x.length; C++)
        yt(x[C], u, g, y);
      o(c.anchor, u, g);
      return;
    }
    if (S === _n) {
      ce(c, u, g);
      return;
    }
    if (y !== 2 && E & 1 && w)
      if (y === 0)
        w.beforeEnter(m), o(m, u, g), ve(() => w.enter(m), b);
      else {
        const { leave: C, delayLeave: P, afterLeave: R } = w, B = () => {
          c.ctx.isUnmounted ? i(m) : o(m, u, g);
        }, Y = () => {
          m._isLeaving && m[yl](
            !0
            /* cancelled */
          ), C(m, () => {
            B(), R && R();
          });
        };
        P ? P(m, B, Y) : Y();
      }
    else
      o(m, u, g);
  }, tt = (c, u, g, y = !1, b = !1) => {
    const {
      type: m,
      props: S,
      ref: w,
      children: x,
      dynamicChildren: E,
      shapeFlag: A,
      patchFlag: C,
      dirs: P,
      cacheIndex: R
    } = c;
    if (C === -2 && (b = !1), w != null && (Ie(), Wt(w, null, g, c, !0), Me()), R != null && (u.renderCache[R] = void 0), A & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const B = A & 1 && P, Y = !Kt(c);
    let G;
    if (Y && (G = S && S.onVnodeBeforeUnmount) && Ue(G, u, c), A & 6)
      ts(c.component, g, y);
    else {
      if (A & 128) {
        c.suspense.unmount(g, y);
        return;
      }
      B && ut(c, null, u, "beforeUnmount"), A & 64 ? c.type.remove(
        c,
        u,
        g,
        At,
        y
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== ye || C > 0 && C & 64) ? $t(
        E,
        u,
        g,
        !1,
        !0
      ) : (m === ye && C & 384 || !b && A & 16) && $t(x, u, g), y && Gn(c);
    }
    (Y && (G = S && S.onVnodeUnmounted) || B) && ve(() => {
      G && Ue(G, u, c), B && ut(c, null, u, "unmounted");
    }, g);
  }, Gn = (c) => {
    const { type: u, el: g, anchor: y, transition: b } = c;
    if (u === ye) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((S) => {
        S.type === Ve ? i(S.el) : Gn(S);
      }) : es(g, y);
      return;
    }
    if (u === _n) {
      N(c);
      return;
    }
    const m = () => {
      i(g), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: S, delayLeave: w } = b, x = () => S(g, m);
      w ? w(c.el, m, x) : x();
    } else
      m();
  }, es = (c, u) => {
    let g;
    for (; c !== u; )
      g = _(c), i(c), c = g;
    i(u);
  }, ts = (c, u, g) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && nl(c);
    const { bum: y, scope: b, job: m, subTree: S, um: w, m: x, a: E } = c;
    hi(x), hi(E), y && Mt(y), b.stop(), m && (m.flags |= 8, tt(S, c, u, g)), w && ve(w, u), ve(() => {
      c.isUnmounted = !0;
    }, u), p.NODE_ENV !== "production" && fl(c);
  }, $t = (c, u, g, y = !1, b = !1, m = 0) => {
    for (let S = m; S < c.length; S++)
      tt(c[S], u, g, y, b);
  }, sn = (c) => {
    if (c.shapeFlag & 6)
      return sn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = _(c.anchor || c.el), g = u && u[bl];
    return g ? _(g) : u;
  };
  let qn = !1;
  const Ko = (c, u, g) => {
    let y;
    c == null ? u._vnode && (tt(u._vnode, null, null, !0), y = u._vnode.component) : T(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      g
    ), u._vnode = c, qn || (qn = !0, ei(y), dr(), qn = !1);
  }, At = {
    p: T,
    um: tt,
    m: yt,
    r: Gn,
    mt: ze,
    mc: Z,
    pc: je,
    pbc: he,
    n: sn,
    o: e
  };
  return {
    render: Ko,
    hydrate: void 0,
    createApp: Wl(Ko)
  };
}
function oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function at({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if ($(o) && $(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = it(i[r]), l.el = s.el), !n && l.patchFlag !== -2 && gn(s, l)), l.type === nn && (l.patchFlag !== -1 ? l.el = s.el : l.__elIndex = r + // take fragment start anchor into account
      (e.type === ye ? 1 : 0)), l.type === Ve && !l.el && (l.el = s.el), p.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function gc(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        l = r + s >> 1, e[n[l]] < h ? r = l + 1 : s = l;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Lr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lr(t);
}
function hi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Hr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Hr(t.subTree) : null;
}
const kr = (e) => e.__isSuspense;
function _c(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : ar(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), nn = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), _n = /* @__PURE__ */ Symbol.for("v-stc"), Gt = [];
let De = null;
function be(e = !1) {
  Gt.push(De = e ? null : []);
}
function mc() {
  Gt.pop(), De = Gt[Gt.length - 1] || null;
}
let Yt = 1;
function gi(e, t = !1) {
  Yt += e, e < 0 && De && t && (De.hasOnce = !0);
}
function Ur(e) {
  return e.dynamicChildren = Yt > 0 ? De || xt : null, mc(), Yt > 0 && De && De.push(e), e;
}
function Oe(e, t, n, o, i, r) {
  return Ur(
    Ye(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function bc(e, t, n, o, i) {
  return Ur(
    $e(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function Bn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jt(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = pn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ec = (...e) => Wr(
  ...e
), Br = ({ key: e }) => e ?? null, mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ee(e) || ne(e) || M(e) ? { i: xe, r: e, k: t, f: !!n } : e : null);
function Ye(e, t = null, n = null, o = 0, i = null, r = e === ye ? 0 : 1, s = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Br(t),
    ref: t && mn(t),
    scopeId: br,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return l ? (Uo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= ee(n) ? 8 : 16), p.NODE_ENV !== "production" && f.key !== f.key && V("VNode created with invalid key (NaN). VNode type:", f.type), Yt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  De && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && De.push(f), f;
}
const $e = p.NODE_ENV !== "production" ? Ec : Wr;
function Wr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === Al) && (p.NODE_ENV !== "production" && !e && V(`Invalid vnode type when creating vnode: ${e}.`), e = Ve), Bn(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Uo(l, n), Yt > 0 && !r && De && (l.shapeFlag & 6 ? De[De.indexOf(e)] = l : De.push(l)), l.patchFlag = -2, l;
  }
  if (Yr(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: l, style: f } = t;
    l && !ee(l) && (t.class = Rn(l)), z(f) && (Nn(f) && !$(f) && (f = Q({}, f)), t.style = Dt(f));
  }
  const s = ee(e) ? 1 : kr(e) ? 128 : El(e) ? 64 : z(e) ? 4 : M(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && s & 4 && Nn(e) && (e = j(e), V(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ye(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function yc(e) {
  return e ? Nn(e) || Ar(e) ? Q({}, e) : e : null;
}
function ct(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: l, transition: f } = e, h = t ? Oc(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Br(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? $(r) ? r.concat(mn(t)) : [r, mn(t)] : mn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && s === -1 && $(l) ? l.map(Kr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && Mo(
    d,
    f.clone(d)
  ), d;
}
function Kr(e) {
  const t = ct(e);
  return $(e.children) && (t.children = e.children.map(Kr)), t;
}
function Nc(e = " ", t = 0) {
  return $e(nn, null, e, t);
}
function vc(e = "", t = !1) {
  return t ? (be(), bc(Ve, null, e)) : $e(Ve, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean" ? $e(Ve) : $(e) ? $e(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Bn(e) ? it(e) : $e(nn, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function Uo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Uo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ar(t) ? t._ctx = xe : i === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: xe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Nc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Oc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Rn([t.class, o.class]));
      else if (i === "style")
        t.style = Dt([t.style, o.style]);
      else if (Zt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !($(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Ue(e, t, n, o = null) {
  qe(e, t, 7, [
    n,
    o
  ]);
}
const wc = Sr();
let xc = 0;
function Dc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || wc, r = {
    uid: xc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Es(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Mr(o, i),
    emitsOptions: Cr(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: q,
    data: q,
    props: q,
    attrs: q,
    slots: q,
    refs: q,
    setupState: q,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return p.NODE_ENV !== "production" ? r.ctx = Il(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Gl.bind(null, r), e.ce && e.ce(r), r;
}
let oe = null;
const Gr = () => oe || xe;
let Tn, yo;
{
  const e = Qt(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  Tn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => oe = n
  ), yo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xt = n
  );
}
const on = (e) => {
  const t = oe;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(t);
  };
}, _i = () => {
  oe && oe.scope.off(), Tn(null);
}, Vc = /* @__PURE__ */ Qe("slot,component");
function No(e, { isNativeTag: t }) {
  (Vc(e) || t(e)) && V(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function qr(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Sc(e, t = !1, n = !1) {
  t && yo(t);
  const { props: o, children: i } = e.vnode, r = qr(e);
  Zl(e, o, r, t), fc(e, i, n || t);
  const s = r ? Cc(e, t) : void 0;
  return t && yo(!1), s;
}
function Cc(e, t) {
  const n = e.type;
  if (p.NODE_ENV !== "production") {
    if (n.name && No(n.name, e.appContext.config), n.components) {
      const i = Object.keys(n.components);
      for (let r = 0; r < i.length; r++)
        No(i[r], e.appContext.config);
    }
    if (n.directives) {
      const i = Object.keys(n.directives);
      for (let r = 0; r < i.length; r++)
        Er(i[r]);
    }
    n.compilerOptions && Tc() && V(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xr), p.NODE_ENV !== "production" && Ml(e);
  const { setup: o } = n;
  if (o) {
    Ie();
    const i = e.setupContext = o.length > 1 ? $c(e) : null, r = on(e), s = Tt(
      o,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Ge(e.props) : e.props,
        i
      ]
    ), l = wo(s);
    if (Me(), r(), (l || e.sp) && !Kt(e) && vr(e), l) {
      if (s.then(_i, _i), t)
        return s.then((f) => {
          mi(e, f, t);
        }).catch((f) => {
          en(f, e, 0);
        });
      if (e.asyncDep = s, p.NODE_ENV !== "production" && !e.suspense) {
        const f = rn(e, n);
        V(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      mi(e, s, t);
  } else
    zr(e, t);
}
function mi(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) ? (p.NODE_ENV !== "production" && Bn(t) && V(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = sr(t), p.NODE_ENV !== "production" && Rl(e)) : p.NODE_ENV !== "production" && t !== void 0 && V(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), zr(e, n);
}
const Tc = () => !0;
function zr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || re);
  {
    const i = on(e);
    Ie();
    try {
      jl(e);
    } finally {
      Me(), i();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === re && !t && (o.template ? V(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : V("Component is missing template or render function: ", o));
}
const bi = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return Sn(), ie(e, "get", ""), e[t];
  },
  set() {
    return V("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return V("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ie(e, "get", ""), e[t];
  }
};
function Pc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ie(e, "get", "$slots"), t[n];
    }
  });
}
function $c(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && V("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : ne(n) && (o = "ref")), o !== "object" && V(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (p.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, bi));
      },
      get slots() {
        return o || (o = Pc(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, bi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Bo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sr(Hs(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mt)
        return mt[n](e);
    },
    has(t, n) {
      return n in t || n in mt;
    }
  })) : e.proxy;
}
const Ac = /(?:^|[-_])\w/g, Ic = (e) => e.replace(Ac, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Jr(e, t = !0) {
  return M(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rn(e, t, n = !1) {
  let o = Jr(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(e.components) || e.parent && i(
      e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Ic(o) : n ? "App" : "Anonymous";
}
function Yr(e) {
  return M(e) && "__vccOpts" in e;
}
const Pn = (e, t) => {
  const n = Ks(e, t, Xt);
  if (p.NODE_ENV !== "production") {
    const o = Gr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mc() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!z(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (ne(a)) {
        Ie();
        const _ = a.value;
        return Me(), [
          "div",
          {},
          ["span", e, d(a)],
          "<",
          l(_),
          ">"
        ];
      } else {
        if (lt(a))
          return [
            "div",
            {},
            ["span", e, pe(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${Re(a) ? " (readonly)" : ""}`
          ];
        if (Re(a))
          return [
            "div",
            {},
            ["span", e, pe(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const _ = [];
    a.type.props && a.props && _.push(s("props", j(a.props))), a.setupState !== q && _.push(s("setup", a.setupState)), a.data !== q && _.push(s("data", j(a.data)));
    const D = f(a, "computed");
    D && _.push(s("computed", D));
    const I = f(a, "inject");
    return I && _.push(s("injected", I)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), _;
  }
  function s(a, _) {
    return _ = Q({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          l(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, _ = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : z(a) ? ["object", { object: _ ? j(a) : a }] : ["span", n, String(a)];
  }
  function f(a, _) {
    const D = a.type;
    if (M(D))
      return;
    const I = {};
    for (const T in a.ctx)
      h(D, T, _) && (I[T] = a.ctx[T]);
    return I;
  }
  function h(a, _, D) {
    const I = a[D];
    if ($(I) && I.includes(_) || z(I) && _ in I || a.extends && h(a.extends, _, D) || a.mixins && a.mixins.some((T) => h(T, _, D)))
      return !0;
  }
  function d(a) {
    return pe(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Ei = "3.5.26", Se = p.NODE_ENV !== "production" ? V : re;
var le = {};
let vo;
const yi = typeof window < "u" && window.trustedTypes;
if (yi)
  try {
    vo = /* @__PURE__ */ yi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    le.NODE_ENV !== "production" && Se(`Error creating trusted types policy: ${e}`);
  }
const Xr = vo ? (e) => vo.createHTML(e) : (e) => e, Rc = "http://www.w3.org/2000/svg", Fc = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, Ni = Xe && /* @__PURE__ */ Xe.createElement("template"), jc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Xe.createElementNS(Rc, e) : t === "mathml" ? Xe.createElementNS(Fc, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Ni.innerHTML = Xr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ni.content;
      if (o === "svg" || o === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Lc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, n) {
  const o = e[Lc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vi = /* @__PURE__ */ Symbol("_vod"), kc = /* @__PURE__ */ Symbol("_vsh"), Uc = /* @__PURE__ */ Symbol(le.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Bc = /(?:^|;)\s*display\s*:/;
function Wc(e, t, n) {
  const o = e.style, i = ee(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ee(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && bn(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && bn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), bn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[Uc];
      s && (n += ";" + s), o.cssText = n, r = Bc.test(n);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = r ? o.display : "", e[kc] && (o.display = "none"));
}
const Kc = /[^\\];\s*$/, Oi = /\s*!important$/;
function bn(e, t, n) {
  if ($(n))
    n.forEach((o) => bn(e, t, o));
  else if (n == null && (n = ""), le.NODE_ENV !== "production" && Kc.test(n) && Se(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Gc(e, t);
    Oi.test(n) ? e.setProperty(
      we(o),
      n.replace(Oi, ""),
      "important"
    ) : e[o] = n;
  }
}
const wi = ["Webkit", "Moz", "ms"], io = {};
function Gc(e, t) {
  const n = io[t];
  if (n)
    return n;
  let o = Ne(t);
  if (o !== "filter" && o in e)
    return io[t] = o;
  o = Mn(o);
  for (let i = 0; i < wi.length; i++) {
    const r = wi[i] + o;
    if (r in e)
      return io[t] = r;
  }
  return t;
}
const xi = "http://www.w3.org/1999/xlink";
function Di(e, t, n, o, i, r = bs(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xi, t.slice(6, t.length)) : e.setAttributeNS(xi, t, n) : n == null || r && !Li(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ft(n) ? String(n) : n
  );
}
function Vi(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Li(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    le.NODE_ENV !== "production" && !s && Se(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function qc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function zc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Si = /* @__PURE__ */ Symbol("_vei");
function Jc(e, t, n, o, i = null) {
  const r = e[Si] || (e[Si] = {}), s = r[t];
  if (o && s)
    s.value = le.NODE_ENV !== "production" ? Ti(o, t) : o;
  else {
    const [l, f] = Yc(t);
    if (o) {
      const h = r[t] = Qc(
        le.NODE_ENV !== "production" ? Ti(o, t) : o,
        i
      );
      qc(e, l, h, f);
    } else s && (zc(e, l, s, f), r[t] = void 0);
  }
}
const Ci = /(?:Once|Passive|Capture)$/;
function Yc(e) {
  let t;
  if (Ci.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ci); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : we(e.slice(2)), t];
}
let ro = 0;
const Xc = /* @__PURE__ */ Promise.resolve(), Zc = () => ro || (Xc.then(() => ro = 0), ro = Date.now());
function Qc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    qe(
      ef(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Zc(), n;
}
function Ti(e, t) {
  return M(e) || $(e) ? e : (Se(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), re);
}
function ef(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Pi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tf = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? Hc(e, o, s) : t === "style" ? Wc(e, n, o) : Zt(t) ? En(t) || Jc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nf(e, t, o, s)) ? (Vi(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Di(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ee(o)) ? Vi(e, Ne(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Di(e, t, o, s));
};
function nf(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pi(t) && M(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Pi(t) && ee(n) ? !1 : t in e;
}
const $i = {};
// @__NO_SIDE_EFFECTS__
function of(e, t, n) {
  let o = /* @__PURE__ */ Ro(e, t);
  An(o) && (o = Q({}, o, t));
  class i extends Wo {
    constructor(s) {
      super(o, s, n);
    }
  }
  return i.def = o, i;
}
const rf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Wo extends rf {
  constructor(t, n = {}, o = Ii) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Ii ? this._root = this.shadowRoot : (le.NODE_ENV !== "production" && this.shadowRoot && Se(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      Q({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Wo) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, fr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (o, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: s } = o;
      let l;
      if (r && !$(r))
        for (const f in r) {
          const h = r[f];
          (h === Number || h && h.type === Number) && (f in this._props && (this._props[f] = Jo(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ne(f)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(s) : le.NODE_ENV !== "production" && s && Se(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    le.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        k(this, o) ? le.NODE_ENV !== "production" && Se(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => rr(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = $(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && o.includes(i) && this._setProp(i, this[i]);
    for (const i of o.map(Ne))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : $i;
    const i = Ne(t);
    n && this._numberProps && this._numberProps[i] && (o = Jo(o)), this._setProp(i, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, i = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === $i ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), o)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(we(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(we(t), n + "") : n || this.removeAttribute(we(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), ff(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = $e(this._def, Q(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, le.NODE_ENV !== "production" && (o.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this._root.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const i = (r, s) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            An(s[0]) ? Q({ detail: s }, s[0]) : { detail: s }
          )
        );
      };
      o.emit = (r, ...s) => {
        i(r, s), we(r) !== r && i(we(r), s);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      if (o && r.setAttribute("nonce", o), r.textContent = t[i], this.shadowRoot.prepend(r), le.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let s = this._childStyles.get(n.__hmrId);
            s || this._childStyles.set(n.__hmrId, s = []), s.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const i = t[o], r = i.getAttribute("name") || "default", s = this._slots[r], l = i.parentNode;
      if (s)
        for (const f of s) {
          if (n && f.nodeType === 1) {
            const h = n + "-s", d = document.createTreeWalker(f, 1);
            f.setAttribute(h, "");
            let a;
            for (; a = d.nextNode(); )
              a.setAttribute(h, "");
          }
          l.insertBefore(f, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const o of t) {
      const i = o.querySelectorAll("slot");
      for (let r = 0; r < i.length; r++)
        n.add(i[r]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (le.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const sf = ["ctrl", "shift", "alt", "meta"], lf = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => sf.some((n) => e[`${n}Key`] && !t.includes(n))
}, so = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = ((i, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const l = lf[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, cf = /* @__PURE__ */ Q({ patchProp: tf }, jc);
let Ai;
function Zr() {
  return Ai || (Ai = dc(cf));
}
const ff = ((...e) => {
  Zr().render(...e);
}), Ii = ((...e) => {
  const t = Zr().createApp(...e);
  le.NODE_ENV !== "production" && (af(t), df(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = pf(o);
    if (!i) return;
    const r = t._component;
    !M(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, uf(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function uf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function af(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => hs(t) || gs(t) || _s(t),
    writable: !1
  });
}
function df(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Se(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Se(o), n;
      },
      set() {
        Se(o);
      }
    });
  }
}
function pf(e) {
  if (ee(e)) {
    const t = document.querySelector(e);
    return le.NODE_ENV !== "production" && !t && Se(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return le.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Se(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var hf = {};
function gf() {
  Mc();
}
hf.NODE_ENV !== "production" && gf();
const _f = { class: "viewer-area" }, mf = {
  key: 0,
  class: "empty-state"
}, bf = {
  key: 1,
  class: "canvas-container"
}, Ef = { class: "image-wrapper" }, yf = ["src"], Nf = {
  class: "overlay-layer",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, vf = ["id", "cx", "cy", "r"], Of = ["stop-color", "stop-opacity"], wf = ["stop-color"], xf = ["points", "fill"], Df = ["onPointerdown", "onPointerup", "title"], Vf = ["onPointerdown", "onPointerup"], Sf = /* @__PURE__ */ Ro({
  __name: "InteractiveFloorplan",
  props: {
    config: {},
    entityStates: {}
  },
  emits: ["entity-click", "entity-long-press"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = Pn(() => !!n.config.imageBase64), r = un(null), s = un(!1), l = un({ x: 0, y: 0 });
    function f(N, O) {
      N.button === 0 && (s.value = !1, l.value = { x: N.clientX, y: N.clientY }, r.value = window.setTimeout(() => {
        s.value = !0, o("entity-long-press", O.entityId);
      }, 500));
    }
    function h(N, O) {
      if (r.value && (clearTimeout(r.value), r.value = null), !s.value) {
        const v = Math.abs(N.clientX - l.value.x), F = Math.abs(N.clientY - l.value.y);
        v < 10 && F < 10 && o("entity-click", O.entityId, O.type);
      }
      s.value = !1;
    }
    function d() {
      r.value && (clearTimeout(r.value), r.value = null);
    }
    function a(N) {
      const O = n.entityStates[N.entityId] || { state: "off" }, { style: v } = N;
      if (N.type === "sensor")
        return {
          color: te(O.state, T(N, O)),
          opacity: 1
        };
      if (N.type === "camera") {
        let he;
        const se = v.colors;
        return O.state === "recording" ? he = se.recordingColor || "#ef4444" : O.state === "streaming" ? he = se.streamingColor || "#3b82f6" : he = se.idleColor || "#6b7280", {
          color: he,
          opacity: v.onOpacity
        };
      }
      const F = v.colors;
      if (O.state == "off")
        return {
          color: F.offColor,
          opacity: v.offOpacity
        };
      let Z = O.color || F.onColor, fe = v.onOpacity;
      return O.brightness !== void 0 && (fe = O.brightness / 255 * v.onOpacity), { color: Z, opacity: fe };
    }
    function _(N) {
      const { style: O, x: v, y: F } = N;
      return {
        left: `${v}%`,
        top: `${F}%`,
        width: `${O.width}%`,
        height: `${O.height}%`,
        transform: `translate(-50%, -50%) rotate(${O.rotation}deg)`,
        position: "absolute",
        zIndex: 1
      };
    }
    function D(N) {
      const { color: O, opacity: v } = a(N), { shape: F } = N, Z = n.entityStates[N.entityId] || { state: "off" };
      if (N.type === "sensor")
        return {
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          opacity: 0,
          borderRadius: "0",
          cursor: "pointer",
          boxShadow: "none",
          transition: "none"
        };
      let fe = v;
      if (Z.state == "on" && Z.brightness !== void 0) {
        const se = N.style.onOpacity;
        fe = 0.3 + Z.brightness / 255 * (se - 0.3);
      }
      return {
        width: "100%",
        height: "100%",
        backgroundColor: O,
        opacity: fe,
        borderRadius: F === "circle" ? "50%" : "4px",
        cursor: "pointer",
        boxShadow: Z.state == "on" ? `0 0 15px ${O}` : "none",
        transition: "all 0.3s ease"
      };
    }
    function I(N) {
      const { offsetX: O, offsetY: v, color: F } = N.labelConfig || {}, Z = n.entityStates[N.entityId];
      return {
        transform: `translate(-50%, -50%) translate(${O || 0}%, ${v || 0}%)`,
        color: N.type === "sensor" ? te(Z?.state, T(N, Z)) : F || "#ffffff",
        pointerEvents: "auto",
        cursor: "pointer"
      };
    }
    function T(N, O) {
      return O?.deviceClass ? O.deviceClass : N.sensorDeviceClass ? N.sensorDeviceClass : O?.unit === "dB" ? "sound_pressure" : O?.unit === "ppm" ? "carbon_dioxide" : ["Mbps", "Mbit/s", "MB/s", "kB/s"].includes(O?.unit || "") ? "data_rate" : ["GB", "MB", "kWh"].includes(O?.unit || "") ? O?.unit === "kWh" ? "energy" : "data_size" : O?.unit === "dBm" ? "signal_strength" : O?.unit === "%" ? "humidity" : O?.unit === "W" ? "power" : O?.unit === "lx" ? "illuminance" : O?.unit === "µg/m³" ? "pm25" : O?.unit === "V" ? "voltage" : O?.unit === "A" ? "current" : "temperature";
    }
    function te(N, O = "temperature") {
      if (O === "connectivity") {
        const F = String(N || "").toLowerCase();
        return ["on", "online", "connected", "up", "true"].includes(F) ? "#22c55e" : ["off", "offline", "disconnected", "down", "false", "unavailable", "unknown"].includes(F) ? "#ef4444" : "#f59e0b";
      }
      const v = Number.parseFloat(String(N || "").replace(",", "."));
      return Number.isFinite(v) ? O === "humidity" ? v < 30 ? "#f59e0b" : v <= 60 ? "#22c55e" : v <= 70 ? "#f59e0b" : "#ef4444" : O === "pressure" ? v < 1e3 ? "#38bdf8" : v <= 1025 ? "#22c55e" : "#f59e0b" : O === "carbon_dioxide" ? v < 800 ? "#22c55e" : v < 1200 ? "#f59e0b" : "#ef4444" : O === "sound_pressure" ? v < 50 ? "#22c55e" : v < 65 ? "#f59e0b" : "#ef4444" : O === "data_rate" ? v < 10 ? "#ef4444" : v < 100 ? "#f59e0b" : "#22c55e" : O === "data_size" ? v < 80 ? "#22c55e" : v < 120 ? "#f59e0b" : "#ef4444" : O === "signal_strength" ? v <= -80 ? "#ef4444" : v <= -65 ? "#f59e0b" : "#22c55e" : O === "battery" ? v < 20 ? "#ef4444" : v < 50 ? "#f59e0b" : "#22c55e" : O === "power" ? v < 500 ? "#22c55e" : v < 1500 ? "#f59e0b" : "#ef4444" : O === "energy" ? v < 5 ? "#22c55e" : v < 15 ? "#f59e0b" : "#ef4444" : O === "illuminance" ? v < 100 ? "#38bdf8" : v < 800 ? "#22c55e" : "#f59e0b" : O === "pm25" ? v < 15 ? "#22c55e" : v < 35 ? "#f59e0b" : "#ef4444" : O === "volatile_organic_compounds" ? v < 300 ? "#22c55e" : v < 1e3 ? "#f59e0b" : "#ef4444" : O === "voltage" ? v < 210 || v > 245 ? "#ef4444" : v < 220 || v > 240 ? "#f59e0b" : "#22c55e" : O === "current" ? v < 5 ? "#22c55e" : v < 12 ? "#f59e0b" : "#ef4444" : v < 18 ? "#38bdf8" : v < 24 ? "#22c55e" : v < 28 ? "#f59e0b" : "#ef4444" : "#ffffff";
    }
    function X(N) {
      const O = n.entityStates[N.entityId];
      return N.type === "sensor" && O?.displayValue ? O.displayValue : N.label;
    }
    function W(N) {
      return N ? N.map((O) => `${O.x} ${O.y}`).join(",") : "";
    }
    function L(N) {
      return ["light", "media_player", "camera"].includes(N.type);
    }
    function ce(N) {
      const O = n.entityStates[N.entityId];
      return N.type === "camera" && O?.state === "recording";
    }
    return (N, O) => (be(), Oe("div", _f, [
      i.value ? (be(), Oe("div", bf, [
        Ye("div", Ef, [
          Ye("img", {
            src: n.config.imageBase64,
            alt: "Floorplan Base",
            draggable: "false"
          }, null, 8, yf),
          (be(), Oe("svg", Nf, [
            Ye("defs", null, [
              (be(!0), Oe(ye, null, to(n.config.entities.filter(L), (v) => (be(), Oe("radialGradient", {
                key: "grad-" + v.id,
                id: "grad-" + v.id,
                gradientUnits: "userSpaceOnUse",
                cx: v.x,
                cy: v.y,
                r: v.style.gradientRadius
              }, [
                Ye("stop", {
                  offset: "0%",
                  "stop-color": a(v).color,
                  "stop-opacity": Math.max(0.3, a(v).opacity)
                }, null, 8, Of),
                Ye("stop", {
                  offset: "100%",
                  "stop-color": a(v).color,
                  "stop-opacity": "0"
                }, null, 8, wf)
              ], 8, vf))), 128))
            ]),
            (be(!0), Oe(ye, null, to(n.config.entities.filter(L), (v) => (be(), Oe("polygon", {
              key: "poly-" + v.id,
              points: W(v.points),
              fill: n.entityStates[v.entityId]?.shouldLightUp ? `url(#grad-${v.id})` : "transparent",
              stroke: "none",
              style: { "pointer-events": "none", transition: "fill-opacity 0.3s ease" }
            }, null, 8, xf))), 128))
          ])),
          (be(!0), Oe(ye, null, to(n.config.entities, (v) => (be(), Oe("div", {
            key: v.id,
            class: "interactive-entity",
            style: Dt(_(v)),
            onPointerdown: (F) => f(F, v),
            onPointerup: (F) => h(F, v),
            onPointerleave: O[1] || (O[1] = (F) => d()),
            title: v.label
          }, [
            Ye("div", {
              class: Rn(["entity-shape", { "camera-recording": ce(v) }]),
              style: Dt(D(v))
            }, null, 6),
            v.labelConfig.show ? (be(), Oe("div", {
              key: 0,
              class: "entity-label",
              style: Dt(I(v)),
              onPointerdown: so((F) => f(F, v), ["stop"]),
              onPointerup: so((F) => h(F, v), ["stop"]),
              onPointerleave: O[0] || (O[0] = so((F) => d(), ["stop"]))
            }, ki(X(v)), 45, Vf)) : vc("", !0)
          ], 44, Df))), 128))
        ])
      ])) : (be(), Oe("div", mf, [...O[2] || (O[2] = [
        Ye("p", null, "No floorplan loaded. Go to Editor to set up.", -1)
      ])]))
    ]));
  }
}), Qr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Cf = /* @__PURE__ */ Qr(Sf, [["__scopeId", "data-v-82a61f8f"]]), Tf = {
  key: 1,
  class: "error"
}, Pf = /* @__PURE__ */ Ro({
  __name: "HaFloorplanCard.ce",
  props: {
    config: { type: [Object, String] },
    hass: { type: null }
  },
  setup(e) {
    const t = e, n = un(null), o = Pn(() => {
      if (!t.config) return null;
      let l = null;
      if (typeof t.config == "string")
        try {
          l = JSON.parse(t.config);
        } catch (f) {
          return console.error("Failed to parse floorplan config", f), null;
        }
      else
        l = t.config;
      return l && l.imageBase64 ? {
        ...l,
        imageBase64: l.imageBase64.replace(/\s/g, "")
      } : l;
    }), i = Pn(() => {
      const l = {};
      return !o.value || !t.hass || o.value.entities?.forEach((f) => {
        const h = t.hass.states[f.entityId];
        if (h) {
          let d = h.state, a, _;
          if (f.type === "light") {
            d == "on" && (h.attributes.rgb_color && (a = `rgb(${h.attributes.rgb_color.join(",")})`), h.attributes.brightness !== void 0 && (_ = h.attributes.brightness));
            const D = d === "on";
            l[f.entityId] = { state: d, color: a, brightness: _, shouldLightUp: D };
          } else if (f.type === "media_player") {
            const D = !["off", "unavailable", "unknown"].includes(d);
            l[f.entityId] = { state: d, shouldLightUp: D };
          } else if (f.type === "camera") {
            const D = ["on", "recording", "streaming"].includes(d);
            l[f.entityId] = { state: d, shouldLightUp: D };
          } else if (f.type === "sensor") {
            const D = h.attributes.unit_of_measurement, I = h.attributes.device_class || f.sensorDeviceClass, T = D ? `${d} ${D}` : d;
            l[f.entityId] = { state: d, unit: D, deviceClass: I, displayValue: T, shouldLightUp: !1 };
          } else
            l[f.entityId] = { state: d };
        } else
          l[f.entityId] = { state: "off" };
      }), l;
    });
    function r(l, f) {
      if (t.hass)
        if (["light", "switch", "media_player"].includes(f))
          t.hass.callService(f, "toggle", {
            entity_id: l
          });
        else if (f === "camera") {
          const h = i.value[l]?.state == "idle" ? "turn_on" : "turn_off";
          t.hass.callService("homeassistant", h, {
            entity_id: l
          });
        } else f === "sensor" ? s(l) : t.hass.callService("homeassistant", "toggle", {
          entity_id: l
        });
    }
    function s(l) {
      const f = new CustomEvent("hass-more-info", {
        detail: { entityId: l },
        bubbles: !0,
        composed: !0
      });
      n.value && n.value.dispatchEvent(f);
    }
    return console.info("%c HA Floorplan Card %c dev ", "background: #333; color: #fff", "background: #0ea5e9; color: #fff"), (l, f) => o.value ? (be(), Oe("ha-card", {
      key: 0,
      ref_key: "cardRef",
      ref: n,
      class: "ha-card-wrapper"
    }, [
      $e(Cf, {
        config: o.value,
        "entity-states": i.value,
        onEntityClick: r,
        onEntityLongPress: s
      }, null, 8, ["config", "entity-states"])
    ], 512)) : (be(), Oe("div", Tf, " No Configuration Loaded "));
  }
}), $f = ":host{display:block!important;width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}*,*:before,*:after{box-sizing:border-box}ha-card{display:block!important;width:100%!important;margin:0!important;padding:0!important;background:none!important;box-shadow:none!important;border:none!important}.ha-card-wrapper{width:100%!important;display:block!important;padding:0!important;margin:0!important}.viewer-area{flex:1;background-color:transparent;display:block;position:relative;padding:0!important;margin:0!important;height:auto;width:100%!important}.empty-state{color:var(--color-text-secondary);font-size:1.2rem;padding:20px;text-align:center}.canvas-container{border-radius:0;overflow:hidden;position:relative;max-width:100%;max-height:100%}.image-wrapper{position:relative;display:block;width:100%;line-height:0;container-type:inline-size}.image-wrapper img{width:100%;height:auto;display:block}.entity-label{position:absolute;top:50%;left:50%;background:#000000b3;color:#fff;padding:2px 4px;font-size:14px;font-size:1.5cqw;border-radius:4px;white-space:nowrap;pointer-events:none;line-height:1.2}.overlay-layer{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}.overlay-layer polygon{vector-effect:non-scaling-stroke}.interactive-entity{z-index:10}.error{padding:20px;color:red}@keyframes camera-recording-blink{0%,to{opacity:1}50%{opacity:.3}}.camera-recording{animation:camera-recording-blink 2s ease-in-out infinite}", Af = /* @__PURE__ */ Qr(Pf, [["styles", [$f]]]), If = /* @__PURE__ */ of(Af);
class Mf extends If {
  setConfig(t) {
    t.floorplan_config ? this.config = t.floorplan_config : t.config ? this.config = t.config : this.config = t;
  }
}
customElements.define("ha-floorplan-card", Mf);
console.info(
  "%c HA FLOORPLAN CARD %c v0.0.1 ",
  "color: white; background: #202020; font-weight: 700;",
  "color: #202020; background: #91eb61; font-weight: 700;"
);
