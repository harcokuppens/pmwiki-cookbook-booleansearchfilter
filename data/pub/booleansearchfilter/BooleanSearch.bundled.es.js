var Je = Object.defineProperty;
var Ze = (o, t, e) => t in o ? Je(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var Q = (o, t, e) => Ze(o, typeof t != "symbol" ? t + "" : t, e);
var Qe = {
  763: () => {
  }
}, he = {};
function tt(o) {
  var t = he[o];
  if (t !== void 0) return t.exports;
  var e = he[o] = { exports: {} };
  return Qe[o](e, e.exports, tt), e.exports;
}
tt.d = (o, t) => {
  for (var e in t) tt.o(t, e) && !tt.o(o, e) && Object.defineProperty(o, e, { enumerable: !0, get: t[e] });
}, tt.o = (o, t) => Object.prototype.hasOwnProperty.call(o, t);
var E = {};
tt.d(E, { MG: () => N, fr: () => Xt, sR: () => Ve, Zo: () => et, iH: () => ze, rt: () => $, jB: () => He, M8: () => Pe, $t: () => Lt, aq: () => Ue, pG: () => Tt, eP: () => se, KU: () => lt, zW: () => re, IX: () => S, mY: () => D, a7: () => st, JG: () => y, ay: () => k, X2: () => Ot, WU: () => ne, Uw: () => Me, gw: () => _t, iX: () => oe, re: () => be, Pg: () => ae, tD: () => Fe, R$: () => O, Dj: () => Z, m7: () => nt, NZ: () => xt, xo: () => B, ou: () => u, qC: () => Nt, mD: () => G, Ay: () => kn });
class u {
  constructor() {
    this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null;
  }
  getTokenSource() {
    return this.source[0];
  }
  getInputStream() {
    return this.source[1];
  }
  get text() {
    return this._text;
  }
  set text(t) {
    this._text = t;
  }
}
function ht(o, t) {
  if (!Array.isArray(o) || !Array.isArray(t)) return !1;
  if (o === t) return !0;
  if (o.length !== t.length) return !1;
  for (let e = 0; e < o.length; e++) if (!(o[e] === t[e] || o[e].equals && o[e].equals(t[e]))) return !1;
  return !0;
}
u.INVALID_TYPE = 0, u.EPSILON = -2, u.MIN_USER_TOKEN_TYPE = 1, u.EOF = -1, u.DEFAULT_CHANNEL = 0, u.HIDDEN_CHANNEL = 1;
const Xe = Math.round(Math.random() * Math.pow(2, 32));
function Ae(o) {
  if (!o) return 0;
  const t = typeof o, e = t === "string" ? o : !(t !== "object" || !o.toString) && o.toString();
  if (!e) return 0;
  let n, s;
  const i = 3 & e.length, r = e.length - i;
  let a = Xe;
  const l = 3432918353, h = 461845907;
  let c = 0;
  for (; c < r;) s = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, s = (65535 & s) * l + (((s >>> 16) * l & 65535) << 16) & 4294967295, s = s << 15 | s >>> 17, s = (65535 & s) * h + (((s >>> 16) * h & 65535) << 16) & 4294967295, a ^= s, a = a << 13 | a >>> 19, n = 5 * (65535 & a) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295, a = 27492 + (65535 & n) + ((58964 + (n >>> 16) & 65535) << 16);
  switch (s = 0, i) {
    case 3:
      s ^= (255 & e.charCodeAt(c + 2)) << 16;
    case 2:
      s ^= (255 & e.charCodeAt(c + 1)) << 8;
    case 1:
      s ^= 255 & e.charCodeAt(c), s = (65535 & s) * l + (((s >>> 16) * l & 65535) << 16) & 4294967295, s = s << 15 | s >>> 17, s = (65535 & s) * h + (((s >>> 16) * h & 65535) << 16) & 4294967295, a ^= s;
  }
  return a ^= e.length, a ^= a >>> 16, a = 2246822507 * (65535 & a) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295, a ^= a >>> 13, a = 3266489909 * (65535 & a) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295, a ^= a >>> 16, a >>> 0;
}
class U {
  constructor() {
    this.count = 0, this.hash = 0;
  }
  update() {
    for (let t = 0; t < arguments.length; t++) {
      const e = arguments[t];
      if (e != null) if (Array.isArray(e)) this.update.apply(this, e);
      else {
        let n = 0;
        switch (typeof e) {
          case "undefined":
          case "function":
            continue;
          case "number":
          case "boolean":
            n = e;
            break;
          case "string":
            n = Ae(e);
            break;
          default:
            e.updateHashCode ? e.updateHashCode(this) : console.log("No updateHashCode for " + e.toString());
            continue;
        }
        n *= 3432918353, n = n << 15 | n >>> 17, n *= 461845907, this.count = this.count + 1;
        let s = this.hash ^ n;
        s = s << 13 | s >>> 19, s = 5 * s + 3864292196, this.hash = s;
      }
    }
  }
  finish() {
    let t = this.hash ^ 4 * this.count;
    return t ^= t >>> 16, t *= 2246822507, t ^= t >>> 13, t *= 3266489909, t ^= t >>> 16, t;
  }
  static hashStuff() {
    const t = new U();
    return t.update.apply(t, arguments), t.finish();
  }
}
function _e(o) {
  return o ? typeof o == "string" ? Ae(o) : o.hashCode() : -1;
}
function Ne(o, t) {
  return o && o.equals ? o.equals(t) : o === t;
}
function tn(o) {
  return o === null ? "null" : o;
}
function G(o) {
  return Array.isArray(o) ? "[" + o.map(tn).join(", ") + "]" : "null";
}
class M {
  constructor(t, e) {
    this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t || _e, this.equalsFunction = e || Ne;
  }
  get(t) {
    if (t == null) return t;
    const e = this._getBucket(t);
    if (!e) return null;
    for (const n of e) if (this.equalsFunction(n, t)) return n;
    return null;
  }
  add(t) {
    return this.getOrAdd(t) === t;
  }
  getOrAdd(t) {
    this._expand();
    const e = this._getSlot(t);
    let n = this.buckets[e];
    if (!n) return n = [t], this.buckets[e] = n, this.itemCount++, t;
    for (const s of n) if (this.equalsFunction(s, t)) return s;
    return n.push(t), this.itemCount++, t;
  }
  has(t) {
    return this.get(t) != null;
  }
  values() {
    return this.buckets.filter((t) => t != null).flat(1);
  }
  toString() {
    return G(this.values());
  }
  get length() {
    return this.itemCount;
  }
  _getSlot(t) {
    return this.hashFunction(t) & this.buckets.length - 1;
  }
  _getBucket(t) {
    return this.buckets[this._getSlot(t)];
  }
  _expand() {
    if (this.itemCount <= this.threshold) return;
    const t = this.buckets, e = 2 * this.buckets.length;
    this.buckets = new Array(e), this.threshold = Math.floor(0.75 * e);
    for (const n of t) if (n) for (const s of n) {
      const i = this._getSlot(s);
      let r = this.buckets[i];
      r || (r = [], this.buckets[i] = r), r.push(s);
    }
  }
}
class A {
  hashCode() {
    const t = new U();
    return this.updateHashCode(t), t.finish();
  }
  evaluate(t, e) {
  }
  evalPrecedence(t, e) {
    return this;
  }
  static andContext(t, e) {
    if (t === null || t === A.NONE) return e;
    if (e === null || e === A.NONE) return t;
    const n = new dt(t, e);
    return n.opnds.length === 1 ? n.opnds[0] : n;
  }
  static orContext(t, e) {
    if (t === null) return e;
    if (e === null) return t;
    if (t === A.NONE || e === A.NONE) return A.NONE;
    const n = new pt(t, e);
    return n.opnds.length === 1 ? n.opnds[0] : n;
  }
}
class dt extends A {
  constructor(t, e) {
    super();
    const n = new M();
    t instanceof dt ? t.opnds.map(function (i) {
      n.add(i);
    }) : n.add(t), e instanceof dt ? e.opnds.map(function (i) {
      n.add(i);
    }) : n.add(e);
    const s = ke(n);
    if (s.length > 0) {
      let i = null;
      s.map(function (r) {
        (i === null || r.precedence < i.precedence) && (i = r);
      }), n.add(i);
    }
    this.opnds = Array.from(n.values());
  }
  equals(t) {
    return this === t || t instanceof dt && ht(this.opnds, t.opnds);
  }
  updateHashCode(t) {
    t.update(this.opnds, "AND");
  }
  evaluate(t, e) {
    for (let n = 0; n < this.opnds.length; n++) if (!this.opnds[n].evaluate(t, e)) return !1;
    return !0;
  }
  evalPrecedence(t, e) {
    let n = !1;
    const s = [];
    for (let r = 0; r < this.opnds.length; r++) {
      const a = this.opnds[r], l = a.evalPrecedence(t, e);
      if (n |= l !== a, l === null) return null;
      l !== A.NONE && s.push(l);
    }
    if (!n) return this;
    if (s.length === 0) return A.NONE;
    let i = null;
    return s.map(function (r) {
      i = i === null ? r : A.andContext(i, r);
    }), i;
  }
  toString() {
    const t = this.opnds.map((e) => e.toString());
    return (t.length > 3 ? t.slice(3) : t).join("&&");
  }
}
class pt extends A {
  constructor(t, e) {
    super();
    const n = new M();
    t instanceof pt ? t.opnds.map(function (i) {
      n.add(i);
    }) : n.add(t), e instanceof pt ? e.opnds.map(function (i) {
      n.add(i);
    }) : n.add(e);
    const s = ke(n);
    if (s.length > 0) {
      const i = s.sort(function (a, l) {
        return a.compareTo(l);
      }), r = i[i.length - 1];
      n.add(r);
    }
    this.opnds = Array.from(n.values());
  }
  equals(t) {
    return this === t || t instanceof pt && ht(this.opnds, t.opnds);
  }
  updateHashCode(t) {
    t.update(this.opnds, "OR");
  }
  evaluate(t, e) {
    for (let n = 0; n < this.opnds.length; n++) if (this.opnds[n].evaluate(t, e)) return !0;
    return !1;
  }
  evalPrecedence(t, e) {
    let n = !1;
    const s = [];
    for (let i = 0; i < this.opnds.length; i++) {
      const r = this.opnds[i], a = r.evalPrecedence(t, e);
      if (n |= a !== r, a === A.NONE) return A.NONE;
      a !== null && s.push(a);
    }
    return n ? (s.length === 0, null) : this;
  }
  toString() {
    const t = this.opnds.map((e) => e.toString());
    return (t.length > 3 ? t.slice(3) : t).join("||");
  }
}
function ke(o) {
  const t = [];
  return o.values().map(function (e) {
    e instanceof A.PrecedencePredicate && t.push(e);
  }), t;
}
function ce(o, t) {
  if (o === null) {
    const e = { state: null, alt: null, context: null, semanticContext: null };
    return t && (e.reachesIntoOuterContext = 0), e;
  }
  {
    const e = {};
    return e.state = o.state || null, e.alt = o.alt === void 0 ? null : o.alt, e.context = o.context || null, e.semanticContext = o.semanticContext || null, t && (e.reachesIntoOuterContext = o.reachesIntoOuterContext || 0, e.precedenceFilterSuppressed = o.precedenceFilterSuppressed || !1), e;
  }
}
class I {
  constructor(t, e) {
    this.checkContext(t, e), t = ce(t), e = ce(e, !0), this.state = t.state !== null ? t.state : e.state, this.alt = t.alt !== null ? t.alt : e.alt, this.context = t.context !== null ? t.context : e.context, this.semanticContext = t.semanticContext !== null ? t.semanticContext : e.semanticContext !== null ? e.semanticContext : A.NONE, this.reachesIntoOuterContext = e.reachesIntoOuterContext, this.precedenceFilterSuppressed = e.precedenceFilterSuppressed;
  }
  checkContext(t, e) {
    t.context !== null && t.context !== void 0 || e !== null && e.context !== null && e.context !== void 0 || (this.context = null);
  }
  hashCode() {
    const t = new U();
    return this.updateHashCode(t), t.finish();
  }
  updateHashCode(t) {
    t.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
  }
  equals(t) {
    return this === t || t instanceof I && this.state.stateNumber === t.state.stateNumber && this.alt === t.alt && (this.context === null ? t.context === null : this.context.equals(t.context)) && this.semanticContext.equals(t.semanticContext) && this.precedenceFilterSuppressed === t.precedenceFilterSuppressed;
  }
  hashCodeForConfigSet() {
    const t = new U();
    return t.update(this.state.stateNumber, this.alt, this.semanticContext), t.finish();
  }
  equalsForConfigSet(t) {
    return this === t || t instanceof I && this.state.stateNumber === t.state.stateNumber && this.alt === t.alt && this.semanticContext.equals(t.semanticContext);
  }
  toString() {
    return "(" + this.state + "," + this.alt + (this.context !== null ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== A.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
  }
}
class S {
  constructor(t, e) {
    this.start = t, this.stop = e;
  }
  clone() {
    return new S(this.start, this.stop);
  }
  contains(t) {
    return t >= this.start && t < this.stop;
  }
  toString() {
    return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString();
  }
  get length() {
    return this.stop - this.start;
  }
}
S.INVALID_INTERVAL = new S(-1, -2);
class D {
  constructor() {
    this.intervals = null, this.readOnly = !1;
  }
  first(t) {
    return this.intervals === null || this.intervals.length === 0 ? u.INVALID_TYPE : this.intervals[0].start;
  }
  addOne(t) {
    this.addInterval(new S(t, t + 1));
  }
  addRange(t, e) {
    this.addInterval(new S(t, e + 1));
  }
  addInterval(t) {
    if (this.intervals === null) this.intervals = [], this.intervals.push(t.clone());
    else {
      for (let e = 0; e < this.intervals.length; e++) {
        const n = this.intervals[e];
        if (t.stop < n.start) return void this.intervals.splice(e, 0, t);
        if (t.stop === n.start) return void (this.intervals[e] = new S(t.start, n.stop));
        if (t.start <= n.stop) return this.intervals[e] = new S(Math.min(n.start, t.start), Math.max(n.stop, t.stop)), void this.reduce(e);
      }
      this.intervals.push(t.clone());
    }
  }
  addSet(t) {
    return t.intervals !== null && t.intervals.forEach((e) => this.addInterval(e), this), this;
  }
  reduce(t) {
    if (t < this.intervals.length - 1) {
      const e = this.intervals[t], n = this.intervals[t + 1];
      e.stop >= n.stop ? (this.intervals.splice(t + 1, 1), this.reduce(t)) : e.stop >= n.start && (this.intervals[t] = new S(e.start, n.stop), this.intervals.splice(t + 1, 1));
    }
  }
  complement(t, e) {
    const n = new D();
    return n.addInterval(new S(t, e + 1)), this.intervals !== null && this.intervals.forEach((s) => n.removeRange(s)), n;
  }
  contains(t) {
    if (this.intervals === null) return !1;
    for (let e = 0; e < this.intervals.length; e++) if (this.intervals[e].contains(t)) return !0;
    return !1;
  }
  removeRange(t) {
    if (t.start === t.stop - 1) this.removeOne(t.start);
    else if (this.intervals !== null) {
      let e = 0;
      for (let n = 0; n < this.intervals.length; n++) {
        const s = this.intervals[e];
        if (t.stop <= s.start) return;
        if (t.start > s.start && t.stop < s.stop) {
          this.intervals[e] = new S(s.start, t.start);
          const i = new S(t.stop, s.stop);
          return void this.intervals.splice(e, 0, i);
        }
        t.start <= s.start && t.stop >= s.stop ? (this.intervals.splice(e, 1), e -= 1) : t.start < s.stop ? this.intervals[e] = new S(s.start, t.start) : t.stop < s.stop && (this.intervals[e] = new S(t.stop, s.stop)), e += 1;
      }
    }
  }
  removeOne(t) {
    if (this.intervals !== null) for (let e = 0; e < this.intervals.length; e++) {
      const n = this.intervals[e];
      if (t < n.start) return;
      if (t === n.start && t === n.stop - 1) return void this.intervals.splice(e, 1);
      if (t === n.start) return void (this.intervals[e] = new S(n.start + 1, n.stop));
      if (t === n.stop - 1) return void (this.intervals[e] = new S(n.start, n.stop - 1));
      if (t < n.stop - 1) {
        const s = new S(n.start, t);
        return n.start = t + 1, void this.intervals.splice(e, 0, s);
      }
    }
  }
  toString(t, e, n) {
    return t = t || null, e = e || null, n = n || !1, this.intervals === null ? "{}" : t !== null || e !== null ? this.toTokenString(t, e) : n ? this.toCharString() : this.toIndexString();
  }
  toCharString() {
    const t = [];
    for (let e = 0; e < this.intervals.length; e++) {
      const n = this.intervals[e];
      n.stop === n.start + 1 ? n.start === u.EOF ? t.push("<EOF>") : t.push("'" + String.fromCharCode(n.start) + "'") : t.push("'" + String.fromCharCode(n.start) + "'..'" + String.fromCharCode(n.stop - 1) + "'");
    }
    return t.length > 1 ? "{" + t.join(", ") + "}" : t[0];
  }
  toIndexString() {
    const t = [];
    for (let e = 0; e < this.intervals.length; e++) {
      const n = this.intervals[e];
      n.stop === n.start + 1 ? n.start === u.EOF ? t.push("<EOF>") : t.push(n.start.toString()) : t.push(n.start.toString() + ".." + (n.stop - 1).toString());
    }
    return t.length > 1 ? "{" + t.join(", ") + "}" : t[0];
  }
  toTokenString(t, e) {
    const n = [];
    for (let s = 0; s < this.intervals.length; s++) {
      const i = this.intervals[s];
      for (let r = i.start; r < i.stop; r++) n.push(this.elementName(t, e, r));
    }
    return n.length > 1 ? "{" + n.join(", ") + "}" : n[0];
  }
  elementName(t, e, n) {
    return n === u.EOF ? "<EOF>" : n === u.EPSILON ? "<EPSILON>" : t[n] || e[n];
  }
  get length() {
    return this.intervals.map((t) => t.length).reduce((t, e) => t + e);
  }
}
class f {
  constructor() {
    this.atn = null, this.stateNumber = f.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = !1, this.transitions = [], this.nextTokenWithinRule = null;
  }
  toString() {
    return this.stateNumber;
  }
  equals(t) {
    return t instanceof f && this.stateNumber === t.stateNumber;
  }
  isNonGreedyExitState() {
    return !1;
  }
  addTransition(t, e) {
    e === void 0 && (e = -1), this.transitions.length === 0 ? this.epsilonOnlyTransitions = t.isEpsilon : this.epsilonOnlyTransitions !== t.isEpsilon && (this.epsilonOnlyTransitions = !1), e === -1 ? this.transitions.push(t) : this.transitions.splice(e, 1, t);
  }
}
f.INVALID_TYPE = 0, f.BASIC = 1, f.RULE_START = 2, f.BLOCK_START = 3, f.PLUS_BLOCK_START = 4, f.STAR_BLOCK_START = 5, f.TOKEN_START = 6, f.RULE_STOP = 7, f.BLOCK_END = 8, f.STAR_LOOP_BACK = 9, f.STAR_LOOP_ENTRY = 10, f.PLUS_LOOP_BACK = 11, f.LOOP_END = 12, f.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"], f.INVALID_STATE_NUMBER = -1;
class b extends f {
  constructor() {
    return super(), this.stateType = f.RULE_STOP, this;
  }
}
class g {
  constructor(t) {
    if (t == null) throw "target cannot be null.";
    this.target = t, this.isEpsilon = !1, this.label = null;
  }
}
g.EPSILON = 1, g.RANGE = 2, g.RULE = 3, g.PREDICATE = 4, g.ATOM = 5, g.ACTION = 6, g.SET = 7, g.NOT_SET = 8, g.WILDCARD = 9, g.PRECEDENCE = 10, g.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"], g.serializationTypes = { EpsilonTransition: g.EPSILON, RangeTransition: g.RANGE, RuleTransition: g.RULE, PredicateTransition: g.PREDICATE, AtomTransition: g.ATOM, ActionTransition: g.ACTION, SetTransition: g.SET, NotSetTransition: g.NOT_SET, WildcardTransition: g.WILDCARD, PrecedencePredicateTransition: g.PRECEDENCE };
class Ct extends g {
  constructor(t, e, n, s) {
    super(t), this.ruleIndex = e, this.precedence = n, this.followState = s, this.serializationType = g.RULE, this.isEpsilon = !0;
  }
  matches(t, e, n) {
    return !1;
  }
}
class Yt extends g {
  constructor(t, e) {
    super(t), this.serializationType = g.SET, e != null ? this.label = e : (this.label = new D(), this.label.addOne(u.INVALID_TYPE));
  }
  matches(t, e, n) {
    return this.label.contains(t);
  }
  toString() {
    return this.label.toString();
  }
}
class Kt extends Yt {
  constructor(t, e) {
    super(t, e), this.serializationType = g.NOT_SET;
  }
  matches(t, e, n) {
    return t >= e && t <= n && !super.matches(t, e, n);
  }
  toString() {
    return "~" + super.toString();
  }
}
class ye extends g {
  constructor(t) {
    super(t), this.serializationType = g.WILDCARD;
  }
  matches(t, e, n) {
    return t >= e && t <= n;
  }
  toString() {
    return ".";
  }
}
class Gt extends g {
  constructor(t) {
    super(t);
  }
}
class en {
}
class nn extends en {
}
class Ie extends nn {
}
class xt extends Ie {
  get ruleContext() {
    throw new Error("missing interface implementation");
  }
}
class B extends Ie {
}
class kt extends B {
}
const Y = {
  toStringTree: function (o, t, e) {
    t = t || null, (e = e || null) !== null && (t = e.ruleNames);
    let n = Y.getNodeText(o, t);
    n = function (r) {
      return r = r.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
    }(n);
    const s = o.getChildCount();
    if (s === 0) return n;
    let i = "(" + n + " ";
    s > 0 && (n = Y.toStringTree(o.getChild(0), t), i = i.concat(n));
    for (let r = 1; r < s; r++) n = Y.toStringTree(o.getChild(r), t), i = i.concat(" " + n);
    return i = i.concat(")"), i;
  }, getNodeText: function (o, t, e) {
    if (t = t || null, (e = e || null) !== null && (t = e.ruleNames), t !== null) {
      if (o instanceof xt) {
        const s = o.ruleContext.getAltNumber();
        return s != 0 ? t[o.ruleIndex] + ":" + s : t[o.ruleIndex];
      }
      if (o instanceof kt) return o.toString();
      if (o instanceof B && o.symbol !== null) return o.symbol.text;
    }
    const n = o.getPayload();
    return n instanceof u ? n.text : o.getPayload().toString();
  }, getChildren: function (o) {
    const t = [];
    for (let e = 0; e < o.getChildCount(); e++) t.push(o.getChild(e));
    return t;
  }, getAncestors: function (o) {
    let t = [];
    for (o = o.getParent(); o !== null;) t = [o].concat(t), o = o.getParent();
    return t;
  }, findAllTokenNodes: function (o, t) {
    return Y.findAllNodes(o, t, !0);
  }, findAllRuleNodes: function (o, t) {
    return Y.findAllNodes(o, t, !1);
  }, findAllNodes: function (o, t, e) {
    const n = [];
    return Y._findAllNodes(o, t, e, n), n;
  }, _findAllNodes: function (o, t, e, n) {
    e && o instanceof B ? o.symbol.type === t && n.push(o) : !e && o instanceof xt && o.ruleIndex === t && n.push(o);
    for (let s = 0; s < o.getChildCount(); s++) Y._findAllNodes(o.getChild(s), t, e, n);
  }, descendants: function (o) {
    let t = [o];
    for (let e = 0; e < o.getChildCount(); e++) t = t.concat(Y.descendants(o.getChild(e)));
    return t;
  }
}, Oe = Y;
class nt extends xt {
  constructor(t, e) {
    super(), this.parentCtx = t || null, this.invokingState = e || -1;
  }
  depth() {
    let t = 0, e = this;
    for (; e !== null;) e = e.parentCtx, t += 1;
    return t;
  }
  isEmpty() {
    return this.invokingState === -1;
  }
  getSourceInterval() {
    return S.INVALID_INTERVAL;
  }
  get ruleContext() {
    return this;
  }
  getPayload() {
    return this;
  }
  getText() {
    return this.getChildCount() === 0 ? "" : this.children.map(function (t) {
      return t.getText();
    }).join("");
  }
  getAltNumber() {
    return 0;
  }
  setAltNumber(t) {
  }
  getChild(t) {
    return null;
  }
  getChildCount() {
    return 0;
  }
  accept(t) {
    return t.visitChildren(this);
  }
  toStringTree(t, e) {
    return Oe.toStringTree(this, t, e);
  }
  toString(t, e) {
    t = t || null, e = e || null;
    let n = this, s = "[";
    for (; n !== null && n !== e;) {
      if (t === null) n.isEmpty() || (s += n.invokingState);
      else {
        const i = n.ruleIndex;
        s += i >= 0 && i < t.length ? t[i] : "" + i;
      }
      n.parentCtx === null || t === null && n.parentCtx.isEmpty() || (s += " "), n = n.parentCtx;
    }
    return s += "]", s;
  }
}
class x {
  constructor(t) {
    this.cachedHashCode = t;
  }
  isEmpty() {
    return this === x.EMPTY;
  }
  hasEmptyPath() {
    return this.getReturnState(this.length - 1) === x.EMPTY_RETURN_STATE;
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(t) {
    t.update(this.cachedHashCode);
  }
}
x.EMPTY = null, x.EMPTY_RETURN_STATE = 2147483647, x.globalNodeCount = 1, x.id = x.globalNodeCount, x.trace_atn_sim = !1;
class q extends x {
  constructor(t, e) {
    const n = new U();
    return n.update(t, e), super(n.finish()), this.parents = t, this.returnStates = e, this;
  }
  isEmpty() {
    return this.returnStates[0] === x.EMPTY_RETURN_STATE;
  }
  getParent(t) {
    return this.parents[t];
  }
  getReturnState(t) {
    return this.returnStates[t];
  }
  equals(t) {
    return this === t || t instanceof q && this.hashCode() === t.hashCode() && ht(this.returnStates, t.returnStates) && ht(this.parents, t.parents);
  }
  toString() {
    if (this.isEmpty()) return "[]";
    {
      let t = "[";
      for (let e = 0; e < this.returnStates.length; e++) e > 0 && (t += ", "), this.returnStates[e] !== x.EMPTY_RETURN_STATE ? (t += this.returnStates[e], this.parents[e] !== null ? t = t + " " + this.parents[e] : t += "null") : t += "$";
      return t + "]";
    }
  }
  get length() {
    return this.returnStates.length;
  }
}
class w extends x {
  constructor(t, e) {
    let n = 0;
    const s = new U();
    t !== null ? s.update(t, e) : s.update(1), n = s.finish(), super(n), this.parentCtx = t, this.returnState = e;
  }
  getParent(t) {
    return this.parentCtx;
  }
  getReturnState(t) {
    return this.returnState;
  }
  equals(t) {
    return this === t || t instanceof w && this.hashCode() === t.hashCode() && this.returnState === t.returnState && (this.parentCtx == null ? t.parentCtx == null : this.parentCtx.equals(t.parentCtx));
  }
  toString() {
    const t = this.parentCtx === null ? "" : this.parentCtx.toString();
    return t.length === 0 ? this.returnState === x.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : this.returnState + " " + t;
  }
  get length() {
    return 1;
  }
  static create(t, e) {
    return e === x.EMPTY_RETURN_STATE && t === null ? x.EMPTY : new w(t, e);
  }
}
class Dt extends w {
  constructor() {
    super(null, x.EMPTY_RETURN_STATE);
  }
  isEmpty() {
    return !0;
  }
  getParent(t) {
    return null;
  }
  getReturnState(t) {
    return this.returnState;
  }
  equals(t) {
    return this === t;
  }
  toString() {
    return "$";
  }
}
x.EMPTY = new Dt();
class mt {
  constructor(t, e) {
    this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t || _e, this.equalsFunction = e || Ne;
  }
  set(t, e) {
    this._expand();
    const n = this._getSlot(t);
    let s = this.buckets[n];
    if (!s) return s = [[t, e]], this.buckets[n] = s, this.itemCount++, e;
    const i = s.find((r) => this.equalsFunction(r[0], t), this);
    if (i) {
      const r = i[1];
      return i[1] = e, r;
    }
    return s.push([t, e]), this.itemCount++, e;
  }
  containsKey(t) {
    const e = this._getBucket(t);
    return !!e && !!e.find((n) => this.equalsFunction(n[0], t), this);
  }
  get(t) {
    const e = this._getBucket(t);
    if (!e) return null;
    const n = e.find((s) => this.equalsFunction(s[0], t), this);
    return n ? n[1] : null;
  }
  entries() {
    return this.buckets.filter((t) => t != null).flat(1);
  }
  getKeys() {
    return this.entries().map((t) => t[0]);
  }
  getValues() {
    return this.entries().map((t) => t[1]);
  }
  toString() {
    return "[" + this.entries().map((t) => "{" + t[0] + ":" + t[1] + "}").join(", ") + "]";
  }
  get length() {
    return this.itemCount;
  }
  _getSlot(t) {
    return this.hashFunction(t) & this.buckets.length - 1;
  }
  _getBucket(t) {
    return this.buckets[this._getSlot(t)];
  }
  _expand() {
    if (this.itemCount <= this.threshold) return;
    const t = this.buckets, e = 2 * this.buckets.length;
    this.buckets = new Array(e), this.threshold = Math.floor(0.75 * e);
    for (const n of t) if (n) for (const s of n) {
      const i = this._getSlot(s[0]);
      let r = this.buckets[i];
      r || (r = [], this.buckets[i] = r), r.push(s);
    }
  }
}
function $t(o, t) {
  if (t == null && (t = nt.EMPTY), t.parentCtx === null || t === nt.EMPTY) return x.EMPTY;
  const e = $t(o, t.parentCtx), n = o.states[t.invokingState].transitions[0];
  return w.create(e, n.followState.stateNumber);
}
function Le(o, t, e) {
  if (o.isEmpty()) return o;
  let n = e.get(o) || null;
  if (n !== null) return n;
  if (n = t.get(o), n !== null) return e.set(o, n), n;
  let s = !1, i = [];
  for (let a = 0; a < i.length; a++) {
    const l = Le(o.getParent(a), t, e);
    if (s || l !== o.getParent(a)) {
      if (!s) {
        i = [];
        for (let h = 0; h < o.length; h++) i[h] = o.getParent(h);
        s = !0;
      }
      i[a] = l;
    }
  }
  if (!s) return t.add(o), e.set(o, o), o;
  let r = null;
  return r = i.length === 0 ? x.EMPTY : i.length === 1 ? w.create(i[0], o.getReturnState(0)) : new q(i, o.returnStates), t.add(r), e.set(r, r), e.set(o, r), r;
}
function Pt(o, t, e, n) {
  if (o === t) return o;
  if (o instanceof w && t instanceof w) return function (s, i, r, a) {
    if (a !== null) {
      let h = a.get(s, i);
      if (h !== null || (h = a.get(i, s), h !== null)) return h;
    }
    const l = function (h, c, d) {
      if (d) {
        if (h === x.EMPTY || c === x.EMPTY) return x.EMPTY;
      } else {
        if (h === x.EMPTY && c === x.EMPTY) return x.EMPTY;
        if (h === x.EMPTY) {
          const p = [c.returnState, x.EMPTY_RETURN_STATE], C = [c.parentCtx, null];
          return new q(C, p);
        }
        if (c === x.EMPTY) {
          const p = [h.returnState, x.EMPTY_RETURN_STATE], C = [h.parentCtx, null];
          return new q(C, p);
        }
      }
      return null;
    }(s, i, r);
    if (l !== null) return a !== null && a.set(s, i, l), l;
    if (s.returnState === i.returnState) {
      const h = Pt(s.parentCtx, i.parentCtx, r, a);
      if (h === s.parentCtx) return s;
      if (h === i.parentCtx) return i;
      const c = w.create(h, s.returnState);
      return a !== null && a.set(s, i, c), c;
    }
    {
      let h = null;
      if ((s === i || s.parentCtx !== null && s.parentCtx === i.parentCtx) && (h = s.parentCtx), h !== null) {
        const C = [s.returnState, i.returnState];
        s.returnState > i.returnState && (C[0] = i.returnState, C[1] = s.returnState);
        const m = new q([h, h], C);
        return a !== null && a.set(s, i, m), m;
      }
      const c = [s.returnState, i.returnState];
      let d = [s.parentCtx, i.parentCtx];
      s.returnState > i.returnState && (c[0] = i.returnState, c[1] = s.returnState, d = [i.parentCtx, s.parentCtx]);
      const p = new q(d, c);
      return a !== null && a.set(s, i, p), p;
    }
  }(o, t, e, n);
  if (e) {
    if (o instanceof Dt) return o;
    if (t instanceof Dt) return t;
  }
  return o instanceof w && (o = new q([o.getParent()], [o.returnState])), t instanceof w && (t = new q([t.getParent()], [t.returnState])), function (s, i, r, a) {
    if (a !== null) {
      let m = a.get(s, i);
      if (m !== null || (m = a.get(i, s), m !== null)) return x.trace_atn_sim && console.log("mergeArrays a=" + s + ",b=" + i + " -> previous"), m;
    }
    let l = 0, h = 0, c = 0, d = new Array(s.returnStates.length + i.returnStates.length).fill(0), p = new Array(s.returnStates.length + i.returnStates.length).fill(null);
    for (; l < s.returnStates.length && h < i.returnStates.length;) {
      const m = s.parents[l], P = i.parents[h];
      if (s.returnStates[l] === i.returnStates[h]) {
        const V = s.returnStates[l];
        V === x.EMPTY_RETURN_STATE && m === null && P === null || m !== null && P !== null && m === P ? (p[c] = m, d[c] = V) : (p[c] = Pt(m, P, r, a), d[c] = V), l += 1, h += 1;
      } else s.returnStates[l] < i.returnStates[h] ? (p[c] = m, d[c] = s.returnStates[l], l += 1) : (p[c] = P, d[c] = i.returnStates[h], h += 1);
      c += 1;
    }
    if (l < s.returnStates.length) for (let m = l; m < s.returnStates.length; m++) p[c] = s.parents[m], d[c] = s.returnStates[m], c += 1;
    else for (let m = h; m < i.returnStates.length; m++) p[c] = i.parents[m], d[c] = i.returnStates[m], c += 1;
    if (c < p.length) {
      if (c === 1) {
        const m = w.create(p[0], d[0]);
        return a !== null && a.set(s, i, m), m;
      }
      p = p.slice(0, c), d = d.slice(0, c);
    }
    const C = new q(p, d);
    return C.equals(s) ? (a !== null && a.set(s, i, s), x.trace_atn_sim && console.log("mergeArrays a=" + s + ",b=" + i + " -> a"), s) : C.equals(i) ? (a !== null && a.set(s, i, i), x.trace_atn_sim && console.log("mergeArrays a=" + s + ",b=" + i + " -> b"), i) : (function (m) {
      const P = new mt();
      for (let V = 0; V < m.length; V++) {
        const vt = m[V];
        P.containsKey(vt) || P.set(vt, vt);
      }
      for (let V = 0; V < m.length; V++) m[V] = P.get(m[V]);
    }(p), a !== null && a.set(s, i, C), x.trace_atn_sim && console.log("mergeArrays a=" + s + ",b=" + i + " -> " + C), C);
  }(o, t, e, n);
}
class R {
  constructor() {
    this.data = new Uint32Array(1);
  }
  set(t) {
    R._checkIndex(t), this._resize(t), this.data[t >>> 5] |= 1 << t % 32;
  }
  get(t) {
    R._checkIndex(t);
    const e = t >>> 5;
    return !(e >= this.data.length || !(this.data[e] & 1 << t % 32));
  }
  clear(t) {
    R._checkIndex(t);
    const e = t >>> 5;
    e < this.data.length && (this.data[e] &= ~(1 << t));
  }
  or(t) {
    const e = Math.min(this.data.length, t.data.length);
    for (let n = 0; n < e; ++n) this.data[n] |= t.data[n];
    if (this.data.length < t.data.length) {
      this._resize((t.data.length << 5) - 1);
      const n = t.data.length;
      for (let s = e; s < n; ++s) this.data[s] = t.data[s];
    }
  }
  values() {
    const t = new Array(this.length);
    let e = 0;
    const n = this.data.length;
    for (let s = 0; s < n; ++s) {
      let i = this.data[s];
      for (; i !== 0;) {
        const r = i & -i;
        t[e++] = (s << 5) + R._bitCount(r - 1), i ^= r;
      }
    }
    return t;
  }
  minValue() {
    for (let t = 0; t < this.data.length; ++t) {
      let e = this.data[t];
      if (e !== 0) {
        let n = 0;
        for (; !(1 & e);) n++, e >>= 1;
        return n + 32 * t;
      }
    }
    return 0;
  }
  hashCode() {
    return U.hashStuff(this.values());
  }
  equals(t) {
    return t instanceof R && ht(this.data, t.data);
  }
  toString() {
    return "{" + this.values().join(", ") + "}";
  }
  get length() {
    return this.data.map((t) => R._bitCount(t)).reduce((t, e) => t + e, 0);
  }
  _resize(t) {
    const e = t + 32 >>> 5;
    if (e <= this.data.length) return;
    const n = new Uint32Array(e);
    n.set(this.data), n.fill(0, this.data.length), this.data = n;
  }
  static _checkIndex(t) {
    if (t < 0) throw new RangeError("index cannot be negative");
  }
  static _bitCount(t) {
    return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, t += t >> 8, 0 + (t += t >> 16) & 63;
  }
}
class st {
  constructor(t) {
    this.atn = t;
  }
  getDecisionLookahead(t) {
    if (t === null) return null;
    const e = t.transitions.length, n = [];
    for (let s = 0; s < e; s++) {
      n[s] = new D();
      const i = new M();
      this._LOOK(t.transition(s).target, null, x.EMPTY, n[s], i, new R(), !1, !1), (n[s].length === 0 || n[s].contains(st.HIT_PRED)) && (n[s] = null);
    }
    return n;
  }
  LOOK(t, e, n) {
    const s = new D(), i = (n = n || null) !== null ? $t(t.atn, n) : null;
    return this._LOOK(t, e, i, s, new M(), new R(), !0, !0), s;
  }
  _LOOK(t, e, n, s, i, r, a, l) {
    const h = new I({ state: t, alt: 0, context: n }, null);
    if (!i.has(h)) {
      if (i.add(h), t === e) {
        if (n === null) return void s.addOne(u.EPSILON);
        if (n.isEmpty() && l) return void s.addOne(u.EOF);
      }
      if (t instanceof b) {
        if (n === null) return void s.addOne(u.EPSILON);
        if (n.isEmpty() && l) return void s.addOne(u.EOF);
        if (n !== x.EMPTY) {
          const c = r.get(t.ruleIndex);
          try {
            r.clear(t.ruleIndex);
            for (let d = 0; d < n.length; d++) {
              const p = this.atn.states[n.getReturnState(d)];
              this._LOOK(p, e, n.getParent(d), s, i, r, a, l);
            }
          } finally {
            c && r.set(t.ruleIndex);
          }
          return;
        }
      }
      for (let c = 0; c < t.transitions.length; c++) {
        const d = t.transitions[c];
        if (d.constructor === Ct) {
          if (r.get(d.target.ruleIndex)) continue;
          const p = w.create(n, d.followState.stateNumber);
          try {
            r.set(d.target.ruleIndex), this._LOOK(d.target, e, p, s, i, r, a, l);
          } finally {
            r.clear(d.target.ruleIndex);
          }
        } else if (d instanceof Gt) a ? this._LOOK(d.target, e, n, s, i, r, a, l) : s.addOne(st.HIT_PRED);
        else if (d.isEpsilon) this._LOOK(d.target, e, n, s, i, r, a, l);
        else if (d.constructor === ye) s.addRange(u.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
        else {
          let p = d.label;
          p !== null && (d instanceof Kt && (p = p.complement(u.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), s.addSet(p));
        }
      }
    }
  }
}
st.HIT_PRED = u.INVALID_TYPE;
class N {
  constructor(t, e) {
    this.grammarType = t, this.maxTokenType = e, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [];
  }
  nextTokensInContext(t, e) {
    return new st(this).LOOK(t, null, e);
  }
  nextTokensNoContext(t) {
    return t.nextTokenWithinRule !== null || (t.nextTokenWithinRule = this.nextTokensInContext(t, null), t.nextTokenWithinRule.readOnly = !0), t.nextTokenWithinRule;
  }
  nextTokens(t, e) {
    return e === void 0 ? this.nextTokensNoContext(t) : this.nextTokensInContext(t, e);
  }
  addState(t) {
    t !== null && (t.atn = this, t.stateNumber = this.states.length), this.states.push(t);
  }
  removeState(t) {
    this.states[t.stateNumber] = null;
  }
  defineDecisionState(t) {
    return this.decisionToState.push(t), t.decision = this.decisionToState.length - 1, t.decision;
  }
  getDecisionState(t) {
    return this.decisionToState.length === 0 ? null : this.decisionToState[t];
  }
  getExpectedTokens(t, e) {
    if (t < 0 || t >= this.states.length) throw "Invalid state number.";
    const n = this.states[t];
    let s = this.nextTokens(n);
    if (!s.contains(u.EPSILON)) return s;
    const i = new D();
    for (i.addSet(s), i.removeOne(u.EPSILON); e !== null && e.invokingState >= 0 && s.contains(u.EPSILON);) {
      const r = this.states[e.invokingState].transitions[0];
      s = this.nextTokens(r.followState), i.addSet(s), i.removeOne(u.EPSILON), e = e.parentCtx;
    }
    return s.contains(u.EPSILON) && i.addOne(u.EOF), i;
  }
}
N.INVALID_ALT_NUMBER = 0;
class ue extends f {
  constructor() {
    super(), this.stateType = f.BASIC;
  }
}
class ct extends f {
  constructor() {
    return super(), this.decision = -1, this.nonGreedy = !1, this;
  }
}
class at extends ct {
  constructor() {
    return super(), this.endState = null, this;
  }
}
class wt extends f {
  constructor() {
    return super(), this.stateType = f.BLOCK_END, this.startState = null, this;
  }
}
class it extends f {
  constructor() {
    return super(), this.stateType = f.LOOP_END, this.loopBackState = null, this;
  }
}
class de extends f {
  constructor() {
    return super(), this.stateType = f.RULE_START, this.stopState = null, this.isPrecedenceRule = !1, this;
  }
}
class sn extends ct {
  constructor() {
    return super(), this.stateType = f.TOKEN_START, this;
  }
}
class pe extends ct {
  constructor() {
    return super(), this.stateType = f.PLUS_LOOP_BACK, this;
  }
}
class Rt extends f {
  constructor() {
    return super(), this.stateType = f.STAR_LOOP_BACK, this;
  }
}
class X extends ct {
  constructor() {
    return super(), this.stateType = f.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this;
  }
}
class bt extends at {
  constructor() {
    return super(), this.stateType = f.PLUS_BLOCK_START, this.loopBackState = null, this;
  }
}
class Ft extends at {
  constructor() {
    return super(), this.stateType = f.STAR_BLOCK_START, this;
  }
}
class ge extends at {
  constructor() {
    return super(), this.stateType = f.BLOCK_START, this;
  }
}
class Mt extends g {
  constructor(t, e) {
    super(t), this.label_ = e, this.label = this.makeLabel(), this.serializationType = g.ATOM;
  }
  makeLabel() {
    const t = new D();
    return t.addOne(this.label_), t;
  }
  matches(t, e, n) {
    return this.label_ === t;
  }
  toString() {
    return this.label_;
  }
}
class rn extends g {
  constructor(t, e, n) {
    super(t), this.serializationType = g.RANGE, this.start = e, this.stop = n, this.label = this.makeLabel();
  }
  makeLabel() {
    const t = new D();
    return t.addRange(this.start, this.stop), t;
  }
  matches(t, e, n) {
    return t >= this.start && t <= this.stop;
  }
  toString() {
    return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
  }
}
class ve extends g {
  constructor(t, e, n, s) {
    super(t), this.serializationType = g.ACTION, this.ruleIndex = e, this.actionIndex = n === void 0 ? -1 : n, this.isCtxDependent = s !== void 0 && s, this.isEpsilon = !0;
  }
  matches(t, e, n) {
    return !1;
  }
  toString() {
    return "action_" + this.ruleIndex + ":" + this.actionIndex;
  }
}
class ut extends g {
  constructor(t, e) {
    super(t), this.serializationType = g.EPSILON, this.isEpsilon = !0, this.outermostPrecedenceReturn = e;
  }
  matches(t, e, n) {
    return !1;
  }
  toString() {
    return "epsilon";
  }
}
class yt extends A {
  constructor(t, e, n) {
    super(), this.ruleIndex = t === void 0 ? -1 : t, this.predIndex = e === void 0 ? -1 : e, this.isCtxDependent = n !== void 0 && n;
  }
  evaluate(t, e) {
    const n = this.isCtxDependent ? e : null;
    return t.sempred(n, this.ruleIndex, this.predIndex);
  }
  updateHashCode(t) {
    t.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  equals(t) {
    return this === t || t instanceof yt && this.ruleIndex === t.ruleIndex && this.predIndex === t.predIndex && this.isCtxDependent === t.isCtxDependent;
  }
  toString() {
    return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
  }
}
A.NONE = new yt();
class we extends Gt {
  constructor(t, e, n, s) {
    super(t), this.serializationType = g.PREDICATE, this.ruleIndex = e, this.predIndex = n, this.isCtxDependent = s, this.isEpsilon = !0;
  }
  matches(t, e, n) {
    return !1;
  }
  getPredicate() {
    return new yt(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  toString() {
    return "pred_" + this.ruleIndex + ":" + this.predIndex;
  }
}
class It extends A {
  constructor(t) {
    super(), this.precedence = t === void 0 ? 0 : t;
  }
  evaluate(t, e) {
    return t.precpred(e, this.precedence);
  }
  evalPrecedence(t, e) {
    return t.precpred(e, this.precedence) ? A.NONE : null;
  }
  compareTo(t) {
    return this.precedence - t.precedence;
  }
  updateHashCode(t) {
    t.update(this.precedence);
  }
  equals(t) {
    return this === t || t instanceof It && this.precedence === t.precedence;
  }
  toString() {
    return "{" + this.precedence + ">=prec}?";
  }
}
A.PrecedencePredicate = It;
class on extends Gt {
  constructor(t, e) {
    super(t), this.serializationType = g.PRECEDENCE, this.precedence = e, this.isEpsilon = !0;
  }
  matches(t, e, n) {
    return !1;
  }
  getPredicate() {
    return new It(this.precedence);
  }
  toString() {
    return this.precedence + " >= _p";
  }
}
class gt {
  constructor(t) {
    t === void 0 && (t = null), this.readOnly = !1, this.verifyATN = t === null || t.verifyATN, this.generateRuleBypassTransitions = t !== null && t.generateRuleBypassTransitions;
  }
}
gt.defaultOptions = new gt(), gt.defaultOptions.readOnly = !0;
class J {
  constructor(t) {
    this.actionType = t, this.isPositionDependent = !1;
  }
  hashCode() {
    const t = new U();
    return this.updateHashCode(t), t.finish();
  }
  updateHashCode(t) {
    t.update(this.actionType);
  }
  equals(t) {
    return this === t;
  }
}
class Ut extends J {
  constructor() {
    super(6);
  }
  execute(t) {
    t.skip();
  }
  toString() {
    return "skip";
  }
}
Ut.INSTANCE = new Ut();
class Wt extends J {
  constructor(t) {
    super(0), this.channel = t;
  }
  execute(t) {
    t._channel = this.channel;
  }
  updateHashCode(t) {
    t.update(this.actionType, this.channel);
  }
  equals(t) {
    return this === t || t instanceof Wt && this.channel === t.channel;
  }
  toString() {
    return "channel(" + this.channel + ")";
  }
}
class jt extends J {
  constructor(t, e) {
    super(1), this.ruleIndex = t, this.actionIndex = e, this.isPositionDependent = !0;
  }
  execute(t) {
    t.action(null, this.ruleIndex, this.actionIndex);
  }
  updateHashCode(t) {
    t.update(this.actionType, this.ruleIndex, this.actionIndex);
  }
  equals(t) {
    return this === t || t instanceof jt && this.ruleIndex === t.ruleIndex && this.actionIndex === t.actionIndex;
  }
}
class Vt extends J {
  constructor() {
    super(3);
  }
  execute(t) {
    t.more();
  }
  toString() {
    return "more";
  }
}
Vt.INSTANCE = new Vt();
class Jt extends J {
  constructor(t) {
    super(7), this.type = t;
  }
  execute(t) {
    t.type = this.type;
  }
  updateHashCode(t) {
    t.update(this.actionType, this.type);
  }
  equals(t) {
    return this === t || t instanceof Jt && this.type === t.type;
  }
  toString() {
    return "type(" + this.type + ")";
  }
}
class Zt extends J {
  constructor(t) {
    super(5), this.mode = t;
  }
  execute(t) {
    t.pushMode(this.mode);
  }
  updateHashCode(t) {
    t.update(this.actionType, this.mode);
  }
  equals(t) {
    return this === t || t instanceof Zt && this.mode === t.mode;
  }
  toString() {
    return "pushMode(" + this.mode + ")";
  }
}
class zt extends J {
  constructor() {
    super(4);
  }
  execute(t) {
    t.popMode();
  }
  toString() {
    return "popMode";
  }
}
zt.INSTANCE = new zt();
class Qt extends J {
  constructor(t) {
    super(2), this.mode = t;
  }
  execute(t) {
    t.setMode(this.mode);
  }
  updateHashCode(t) {
    t.update(this.actionType, this.mode);
  }
  equals(t) {
    return this === t || t instanceof Qt && this.mode === t.mode;
  }
  toString() {
    return "mode(" + this.mode + ")";
  }
}
function St(o, t) {
  const e = [];
  return e[o - 1] = t, e.map(function (n) {
    return t;
  });
}
class Xt {
  constructor(t) {
    t == null && (t = gt.defaultOptions), this.deserializationOptions = t, this.stateFactories = null, this.actionFactories = null;
  }
  deserialize(t) {
    const e = this.reset(t);
    this.checkVersion(e), e && this.skipUUID();
    const n = this.readATN();
    this.readStates(n, e), this.readRules(n, e), this.readModes(n);
    const s = [];
    return this.readSets(n, s, this.readInt.bind(this)), e && this.readSets(n, s, this.readInt32.bind(this)), this.readEdges(n, s), this.readDecisions(n), this.readLexerActions(n, e), this.markPrecedenceDecisions(n), this.verifyATN(n), this.deserializationOptions.generateRuleBypassTransitions && n.grammarType === 1 && (this.generateRuleBypassTransitions(n), this.verifyATN(n)), n;
  }
  reset(t) {
    if ((t.charCodeAt ? t.charCodeAt(0) : t[0]) === 3) {
      const e = function (s) {
        const i = s.charCodeAt(0);
        return i > 1 ? i - 2 : i + 65534;
      }, n = t.split("").map(e);
      return n[0] = t.charCodeAt(0), this.data = n, this.pos = 0, !0;
    }
    return this.data = t, this.pos = 0, !1;
  }
  skipUUID() {
    let t = 0;
    for (; t++ < 8;) this.readInt();
  }
  checkVersion(t) {
    const e = this.readInt();
    if (!t && e !== 4) throw "Could not deserialize ATN with version " + e + " (expected 4).";
  }
  readATN() {
    const t = this.readInt(), e = this.readInt();
    return new N(t, e);
  }
  readStates(t, e) {
    let n, s, i;
    const r = [], a = [], l = this.readInt();
    for (let d = 0; d < l; d++) {
      const p = this.readInt();
      if (p === f.INVALID_TYPE) {
        t.addState(null);
        continue;
      }
      let C = this.readInt();
      e && C === 65535 && (C = -1);
      const m = this.stateFactory(p, C);
      if (p === f.LOOP_END) {
        const P = this.readInt();
        r.push([m, P]);
      } else if (m instanceof at) {
        const P = this.readInt();
        a.push([m, P]);
      }
      t.addState(m);
    }
    for (n = 0; n < r.length; n++) s = r[n], s[0].loopBackState = t.states[s[1]];
    for (n = 0; n < a.length; n++) s = a[n], s[0].endState = t.states[s[1]];
    let h = this.readInt();
    for (n = 0; n < h; n++) i = this.readInt(), t.states[i].nonGreedy = !0;
    let c = this.readInt();
    for (n = 0; n < c; n++) i = this.readInt(), t.states[i].isPrecedenceRule = !0;
  }
  readRules(t, e) {
    let n;
    const s = this.readInt();
    for (t.grammarType === 0 && (t.ruleToTokenType = St(s, 0)), t.ruleToStartState = St(s, 0), n = 0; n < s; n++) {
      const i = this.readInt();
      if (t.ruleToStartState[n] = t.states[i], t.grammarType === 0) {
        let r = this.readInt();
        e && r === 65535 && (r = u.EOF), t.ruleToTokenType[n] = r;
      }
    }
    for (t.ruleToStopState = St(s, 0), n = 0; n < t.states.length; n++) {
      const i = t.states[n];
      i instanceof b && (t.ruleToStopState[i.ruleIndex] = i, t.ruleToStartState[i.ruleIndex].stopState = i);
    }
  }
  readModes(t) {
    const e = this.readInt();
    for (let n = 0; n < e; n++) {
      let s = this.readInt();
      t.modeToStartState.push(t.states[s]);
    }
  }
  readSets(t, e, n) {
    const s = this.readInt();
    for (let i = 0; i < s; i++) {
      const r = new D();
      e.push(r);
      const a = this.readInt();
      this.readInt() !== 0 && r.addOne(-1);
      for (let l = 0; l < a; l++) {
        const h = n(), c = n();
        r.addRange(h, c);
      }
    }
  }
  readEdges(t, e) {
    let n, s, i, r, a;
    const l = this.readInt();
    for (n = 0; n < l; n++) {
      const h = this.readInt(), c = this.readInt(), d = this.readInt(), p = this.readInt(), C = this.readInt(), m = this.readInt();
      r = this.edgeFactory(t, d, h, c, p, C, m, e), t.states[h].addTransition(r);
    }
    for (n = 0; n < t.states.length; n++) for (i = t.states[n], s = 0; s < i.transitions.length; s++) {
      const h = i.transitions[s];
      if (!(h instanceof Ct)) continue;
      let c = -1;
      t.ruleToStartState[h.target.ruleIndex].isPrecedenceRule && h.precedence === 0 && (c = h.target.ruleIndex), r = new ut(h.followState, c), t.ruleToStopState[h.target.ruleIndex].addTransition(r);
    }
    for (n = 0; n < t.states.length; n++) {
      if (i = t.states[n], i instanceof at) {
        if (i.endState === null || i.endState.startState !== null) throw "IllegalState";
        i.endState.startState = i;
      }
      if (i instanceof pe) for (s = 0; s < i.transitions.length; s++) a = i.transitions[s].target, a instanceof bt && (a.loopBackState = i);
      else if (i instanceof Rt) for (s = 0; s < i.transitions.length; s++) a = i.transitions[s].target, a instanceof X && (a.loopBackState = i);
    }
  }
  readDecisions(t) {
    const e = this.readInt();
    for (let n = 0; n < e; n++) {
      const s = this.readInt(), i = t.states[s];
      t.decisionToState.push(i), i.decision = n;
    }
  }
  readLexerActions(t, e) {
    if (t.grammarType === 0) {
      const n = this.readInt();
      t.lexerActions = St(n, null);
      for (let s = 0; s < n; s++) {
        const i = this.readInt();
        let r = this.readInt();
        e && r === 65535 && (r = -1);
        let a = this.readInt();
        e && a === 65535 && (a = -1), t.lexerActions[s] = this.lexerActionFactory(i, r, a);
      }
    }
  }
  generateRuleBypassTransitions(t) {
    let e;
    const n = t.ruleToStartState.length;
    for (e = 0; e < n; e++) t.ruleToTokenType[e] = t.maxTokenType + e + 1;
    for (e = 0; e < n; e++) this.generateRuleBypassTransition(t, e);
  }
  generateRuleBypassTransition(t, e) {
    let n, s;
    const i = new ge();
    i.ruleIndex = e, t.addState(i);
    const r = new wt();
    r.ruleIndex = e, t.addState(r), i.endState = r, t.defineDecisionState(i), r.startState = i;
    let a = null, l = null;
    if (t.ruleToStartState[e].isPrecedenceRule) {
      for (l = null, n = 0; n < t.states.length; n++) if (s = t.states[n], this.stateIsEndStateFor(s, e)) {
        l = s, a = s.loopBackState.transitions[0];
        break;
      }
      if (a === null) throw "Couldn't identify final state of the precedence rule prefix section.";
    } else l = t.ruleToStopState[e];
    for (n = 0; n < t.states.length; n++) {
      s = t.states[n];
      for (let p = 0; p < s.transitions.length; p++) {
        const C = s.transitions[p];
        C !== a && C.target === l && (C.target = r);
      }
    }
    const h = t.ruleToStartState[e], c = h.transitions.length;
    for (; c > 0;) i.addTransition(h.transitions[c - 1]), h.transitions = h.transitions.slice(-1);
    t.ruleToStartState[e].addTransition(new ut(i)), r.addTransition(new ut(l));
    const d = new ue();
    t.addState(d), d.addTransition(new Mt(r, t.ruleToTokenType[e])), i.addTransition(new ut(d));
  }
  stateIsEndStateFor(t, e) {
    if (t.ruleIndex !== e || !(t instanceof X)) return null;
    const n = t.transitions[t.transitions.length - 1].target;
    return n instanceof it && n.epsilonOnlyTransitions && n.transitions[0].target instanceof b ? t : null;
  }
  markPrecedenceDecisions(t) {
    for (let e = 0; e < t.states.length; e++) {
      const n = t.states[e];
      if (n instanceof X && t.ruleToStartState[n.ruleIndex].isPrecedenceRule) {
        const s = n.transitions[n.transitions.length - 1].target;
        s instanceof it && s.epsilonOnlyTransitions && s.transitions[0].target instanceof b && (n.isPrecedenceDecision = !0);
      }
    }
  }
  verifyATN(t) {
    if (this.deserializationOptions.verifyATN) for (let e = 0; e < t.states.length; e++) {
      const n = t.states[e];
      if (n !== null) if (this.checkCondition(n.epsilonOnlyTransitions || n.transitions.length <= 1), n instanceof bt) this.checkCondition(n.loopBackState !== null);
      else if (n instanceof X) if (this.checkCondition(n.loopBackState !== null), this.checkCondition(n.transitions.length === 2), n.transitions[0].target instanceof Ft) this.checkCondition(n.transitions[1].target instanceof it), this.checkCondition(!n.nonGreedy);
      else {
        if (!(n.transitions[0].target instanceof it)) throw "IllegalState";
        this.checkCondition(n.transitions[1].target instanceof Ft), this.checkCondition(n.nonGreedy);
      }
      else n instanceof Rt ? (this.checkCondition(n.transitions.length === 1), this.checkCondition(n.transitions[0].target instanceof X)) : n instanceof it ? this.checkCondition(n.loopBackState !== null) : n instanceof de ? this.checkCondition(n.stopState !== null) : n instanceof at ? this.checkCondition(n.endState !== null) : n instanceof wt ? this.checkCondition(n.startState !== null) : n instanceof ct ? this.checkCondition(n.transitions.length <= 1 || n.decision >= 0) : this.checkCondition(n.transitions.length <= 1 || n instanceof b);
    }
  }
  checkCondition(t, e) {
    if (!t) throw e == null && (e = "IllegalState"), e;
  }
  readInt() {
    return this.data[this.pos++];
  }
  readInt32() {
    return this.readInt() | this.readInt() << 16;
  }
  edgeFactory(t, e, n, s, i, r, a, l) {
    const h = t.states[s];
    switch (e) {
      case g.EPSILON:
        return new ut(h);
      case g.RANGE:
        return new rn(h, a !== 0 ? u.EOF : i, r);
      case g.RULE:
        return new Ct(t.states[i], r, a, h);
      case g.PREDICATE:
        return new we(h, i, r, a !== 0);
      case g.PRECEDENCE:
        return new on(h, i);
      case g.ATOM:
        return new Mt(h, a !== 0 ? u.EOF : i);
      case g.ACTION:
        return new ve(h, i, r, a !== 0);
      case g.SET:
        return new Yt(h, l[i]);
      case g.NOT_SET:
        return new Kt(h, l[i]);
      case g.WILDCARD:
        return new ye(h);
      default:
        throw "The specified transition type: " + e + " is not valid.";
    }
  }
  stateFactory(t, e) {
    if (this.stateFactories === null) {
      const n = [];
      n[f.INVALID_TYPE] = null, n[f.BASIC] = () => new ue(), n[f.RULE_START] = () => new de(), n[f.BLOCK_START] = () => new ge(), n[f.PLUS_BLOCK_START] = () => new bt(), n[f.STAR_BLOCK_START] = () => new Ft(), n[f.TOKEN_START] = () => new sn(), n[f.RULE_STOP] = () => new b(), n[f.BLOCK_END] = () => new wt(), n[f.STAR_LOOP_BACK] = () => new Rt(), n[f.STAR_LOOP_ENTRY] = () => new X(), n[f.PLUS_LOOP_BACK] = () => new pe(), n[f.LOOP_END] = () => new it(), this.stateFactories = n;
    }
    if (t > this.stateFactories.length || this.stateFactories[t] === null) throw "The specified state type " + t + " is not valid.";
    {
      const n = this.stateFactories[t]();
      if (n !== null) return n.ruleIndex = e, n;
    }
  }
  lexerActionFactory(t, e, n) {
    if (this.actionFactories === null) {
      const s = [];
      s[0] = (i, r) => new Wt(i), s[1] = (i, r) => new jt(i, r), s[2] = (i, r) => new Qt(i), s[3] = (i, r) => Vt.INSTANCE, s[4] = (i, r) => zt.INSTANCE, s[5] = (i, r) => new Zt(i), s[6] = (i, r) => Ut.INSTANCE, s[7] = (i, r) => new Jt(i), this.actionFactories = s;
    }
    if (t > this.actionFactories.length || this.actionFactories[t] === null) throw "The specified lexer action type " + t + " is not valid.";
    return this.actionFactories[t](e, n);
  }
}
class Tt {
  syntaxError(t, e, n, s, i, r) {
  }
  reportAmbiguity(t, e, n, s, i, r, a) {
  }
  reportAttemptingFullContext(t, e, n, s, i, r) {
  }
  reportContextSensitivity(t, e, n, s, i, r) {
  }
}
class qt extends Tt {
  constructor() {
    super();
  }
  syntaxError(t, e, n, s, i, r) {
    console.error("line " + n + ":" + s + " " + i);
  }
}
qt.INSTANCE = new qt();
class an extends Tt {
  constructor(t) {
    if (super(), t === null) throw "delegates";
    return this.delegates = t, this;
  }
  syntaxError(t, e, n, s, i, r) {
    this.delegates.map((a) => a.syntaxError(t, e, n, s, i, r));
  }
  reportAmbiguity(t, e, n, s, i, r, a) {
    this.delegates.map((l) => l.reportAmbiguity(t, e, n, s, i, r, a));
  }
  reportAttemptingFullContext(t, e, n, s, i, r) {
    this.delegates.map((a) => a.reportAttemptingFullContext(t, e, n, s, i, r));
  }
  reportContextSensitivity(t, e, n, s, i, r) {
    this.delegates.map((a) => a.reportContextSensitivity(t, e, n, s, i, r));
  }
}
class At {
  constructor() {
    this._listeners = [qt.INSTANCE], this._interp = null, this._stateNumber = -1;
  }
  checkVersion(t) {
    const e = "4.13.2";
    e !== t && console.log("ANTLR runtime and generated code versions disagree: " + e + "!=" + t);
  }
  addErrorListener(t) {
    this._listeners.push(t);
  }
  removeErrorListeners() {
    this._listeners = [];
  }
  getLiteralNames() {
    return Object.getPrototypeOf(this).constructor.literalNames || [];
  }
  getSymbolicNames() {
    return Object.getPrototypeOf(this).constructor.symbolicNames || [];
  }
  getTokenNames() {
    if (!this.tokenNames) {
      const t = this.getLiteralNames(), e = this.getSymbolicNames(), n = t.length > e.length ? t.length : e.length;
      this.tokenNames = [];
      for (let s = 0; s < n; s++) this.tokenNames[s] = t[s] || e[s] || "<INVALID";
    }
    return this.tokenNames;
  }
  getTokenTypeMap() {
    const t = this.getTokenNames();
    if (t === null) throw "The current recognizer does not provide a list of token names.";
    let e = this.tokenTypeMapCache[t];
    return e === void 0 && (e = t.reduce(function (n, s, i) {
      n[s] = i;
    }), e.EOF = u.EOF, this.tokenTypeMapCache[t] = e), e;
  }
  getRuleIndexMap() {
    const t = this.ruleNames;
    if (t === null) throw "The current recognizer does not provide a list of rule names.";
    let e = this.ruleIndexMapCache[t];
    return e === void 0 && (e = t.reduce(function (n, s, i) {
      n[s] = i;
    }), this.ruleIndexMapCache[t] = e), e;
  }
  getTokenType(t) {
    const e = this.getTokenTypeMap()[t];
    return e !== void 0 ? e : u.INVALID_TYPE;
  }
  getErrorHeader(t) {
    return "line " + t.getOffendingToken().line + ":" + t.getOffendingToken().column;
  }
  getTokenErrorDisplay(t) {
    if (t === null) return "<no token>";
    let e = t.text;
    return e === null && (e = t.type === u.EOF ? "<EOF>" : "<" + t.type + ">"), e = e.replace(`
`, "\\n").replace("\r", "\\r").replace("	", "\\t"), "'" + e + "'";
  }
  getErrorListenerDispatch() {
    return console.warn("Calling deprecated method in Recognizer class: getErrorListenerDispatch()"), this.getErrorListener();
  }
  getErrorListener() {
    return new an(this._listeners);
  }
  sempred(t, e, n) {
    return !0;
  }
  precpred(t, e) {
    return !0;
  }
  get atn() {
    return this._interp.atn;
  }
  get state() {
    return this._stateNumber;
  }
  set state(t) {
    this._stateNumber = t;
  }
}
At.tokenTypeMapCache = {}, At.ruleIndexMapCache = {};
class $ extends u {
  constructor(t, e, n, s, i) {
    super(), this.source = t !== void 0 ? t : $.EMPTY_SOURCE, this.type = e !== void 0 ? e : null, this.channel = n !== void 0 ? n : u.DEFAULT_CHANNEL, this.start = s !== void 0 ? s : -1, this.stop = i !== void 0 ? i : -1, this.tokenIndex = -1, this.source[0] !== null ? (this.line = t[0].line, this.column = t[0].column) : this.column = -1;
  }
  clone() {
    const t = new $(this.source, this.type, this.channel, this.start, this.stop);
    return t.tokenIndex = this.tokenIndex, t.line = this.line, t.column = this.column, t.text = this.text, t;
  }
  cloneWithType(t) {
    const e = new $(this.source, t, this.channel, this.start, this.stop);
    return e.tokenIndex = this.tokenIndex, e.line = this.line, e.column = this.column, t === u.EOF && (e.text = ""), e;
  }
  toString() {
    let t = this.text;
    return t = t !== null ? t.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + t + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
  }
  get text() {
    if (this._text !== null) return this._text;
    const t = this.getInputStream();
    if (t === null) return null;
    const e = t.size;
    return this.start < e && this.stop < e ? t.getText(this.start, this.stop) : "<EOF>";
  }
  set text(t) {
    this._text = t;
  }
}
$.EMPTY_SOURCE = [null, null];
class ln {
}
class Ht extends ln {
  constructor(t) {
    super(), this.copyText = t !== void 0 && t;
  }
  create(t, e, n, s, i, r, a, l) {
    const h = new $(t, e, s, i, r);
    return h.line = a, h.column = l, n !== null ? h.text = n : this.copyText && t[1] !== null && (h.text = t[1].getText(i, r)), h;
  }
  createThin(t, e) {
    const n = new $(null, t);
    return n.text = e, n;
  }
}
Ht.DEFAULT = new Ht();
class Z extends Error {
  constructor(t) {
    super(t.message), Error.captureStackTrace && Error.captureStackTrace(this, Z), this.message = t.message, this.recognizer = t.recognizer, this.input = t.input, this.ctx = t.ctx, this.offendingToken = null, this.offendingState = -1, this.recognizer !== null && (this.offendingState = this.recognizer.state);
  }
  getExpectedTokens() {
    return this.recognizer !== null ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null;
  }
  toString() {
    return this.message;
  }
}
class te extends Z {
  constructor(t, e, n, s) {
    super({ message: "", recognizer: t, input: e, ctx: null }), this.startIndex = n, this.deadEndConfigs = s;
  }
  toString() {
    let t = "";
    return this.startIndex >= 0 && this.startIndex < this.input.size && (t = this.input.getText(new S(this.startIndex, this.startIndex))), "LexerNoViableAltException" + t;
  }
}
class y extends At {
  constructor(t) {
    super(), this._input = t, this._factory = Ht.DEFAULT, this._tokenFactorySourcePair = [this, t], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = !1, this._channel = u.DEFAULT_CHANNEL, this._type = u.INVALID_TYPE, this._modeStack = [], this._mode = y.DEFAULT_MODE, this._text = null;
  }
  reset() {
    this._input !== null && this._input.seek(0), this._token = null, this._type = u.INVALID_TYPE, this._channel = u.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = !1, this._mode = y.DEFAULT_MODE, this._modeStack = [], this._interp.reset();
  }
  nextToken() {
    if (this._input === null) throw "nextToken requires a non-null input stream.";
    const t = this._input.mark();
    try {
      for (; ;) {
        if (this._hitEOF) return this.emitEOF(), this._token;
        this._token = null, this._channel = u.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
        let e = !1;
        for (; ;) {
          this._type = u.INVALID_TYPE;
          let n = y.SKIP;
          try {
            n = this._interp.match(this._input, this._mode);
          } catch (s) {
            if (!(s instanceof Z)) throw console.log(s.stack), s;
            this.notifyListeners(s), this.recover(s);
          }
          if (this._input.LA(1) === u.EOF && (this._hitEOF = !0), this._type === u.INVALID_TYPE && (this._type = n), this._type === y.SKIP) {
            e = !0;
            break;
          }
          if (this._type !== y.MORE) break;
        }
        if (!e) return this._token === null && this.emit(), this._token;
      }
    } finally {
      this._input.release(t);
    }
  }
  skip() {
    this._type = y.SKIP;
  }
  more() {
    this._type = y.MORE;
  }
  mode(t) {
    console.warn("Calling deprecated method in Lexer class: mode(...)"), this.setMode(t);
  }
  setMode(t) {
    this._mode = t;
  }
  getMode() {
    return this._mode;
  }
  getModeStack() {
    return this._modeStack;
  }
  pushMode(t) {
    this._interp.debug && console.log("pushMode " + t), this._modeStack.push(this._mode), this.setMode(t);
  }
  popMode() {
    if (this._modeStack.length === 0) throw "Empty Stack";
    return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.setMode(this._modeStack.pop()), this._mode;
  }
  emitToken(t) {
    this._token = t;
  }
  emit() {
    const t = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn);
    return this.emitToken(t), t;
  }
  emitEOF() {
    const t = this.column, e = this.line, n = this._factory.create(this._tokenFactorySourcePair, u.EOF, null, u.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, e, t);
    return this.emitToken(n), n;
  }
  getCharIndex() {
    return this._input.index;
  }
  getAllTokens() {
    const t = [];
    let e = this.nextToken();
    for (; e.type !== u.EOF;) t.push(e), e = this.nextToken();
    return t;
  }
  notifyListeners(t) {
    const e = this._tokenStartCharIndex, n = this._input.index, s = this._input.getText(e, n), i = "token recognition error at: '" + this.getErrorDisplay(s) + "'";
    this.getErrorListener().syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, i, t);
  }
  getErrorDisplay(t) {
    const e = [];
    for (let n = 0; n < t.length; n++) e.push(t[n]);
    return e.join("");
  }
  getErrorDisplayForChar(t) {
    return t.charCodeAt(0) === u.EOF ? "<EOF>" : t === `
` ? "\\n" : t === "	" ? "\\t" : t === "\r" ? "\\r" : t;
  }
  getCharErrorDisplay(t) {
    return "'" + this.getErrorDisplayForChar(t) + "'";
  }
  recover(t) {
    this._input.LA(1) !== u.EOF && (t instanceof te ? this._interp.consume(this._input) : this._input.consume());
  }
  get inputStream() {
    return this._input;
  }
  set inputStream(t) {
    this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = t, this._tokenFactorySourcePair = [this, this._input];
  }
  get sourceName() {
    return this._input.sourceName;
  }
  get type() {
    return this._type;
  }
  set type(t) {
    this._type = t;
  }
  get line() {
    return this._interp.line;
  }
  set line(t) {
    this._interp.line = t;
  }
  get column() {
    return this._interp.column;
  }
  set column(t) {
    this._interp.column = t;
  }
  get text() {
    return this._text !== null ? this._text : this._interp.getText(this._input);
  }
  set text(t) {
    this._text = t;
  }
}
function hn(o) {
  return o.hashCodeForConfigSet();
}
function cn(o, t) {
  return o === t || o !== null && t !== null && o.equalsForConfigSet(t);
}
y.DEFAULT_MODE = 0, y.MORE = -2, y.SKIP = -3, y.DEFAULT_TOKEN_CHANNEL = u.DEFAULT_CHANNEL, y.HIDDEN = u.HIDDEN_CHANNEL, y.MIN_CHAR_VALUE = 0, y.MAX_CHAR_VALUE = 1114111;
class v {
  constructor(t) {
    this.configLookup = new M(hn, cn), this.fullCtx = t === void 0 || t, this.readOnly = !1, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = !1, this.dipsIntoOuterContext = !1, this.cachedHashCode = -1;
  }
  add(t, e) {
    if (e === void 0 && (e = null), this.readOnly) throw "This set is readonly";
    t.semanticContext !== A.NONE && (this.hasSemanticContext = !0), t.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = !0);
    const n = this.configLookup.getOrAdd(t);
    if (n === t) return this.cachedHashCode = -1, this.configs.push(t), !0;
    const s = !this.fullCtx, i = Pt(n.context, t.context, s, e);
    return n.reachesIntoOuterContext = Math.max(n.reachesIntoOuterContext, t.reachesIntoOuterContext), t.precedenceFilterSuppressed && (n.precedenceFilterSuppressed = !0), n.context = i, !0;
  }
  getStates() {
    const t = new M();
    for (let e = 0; e < this.configs.length; e++) t.add(this.configs[e].state);
    return t;
  }
  getPredicates() {
    const t = [];
    for (let e = 0; e < this.configs.length; e++) {
      const n = this.configs[e].semanticContext;
      n !== A.NONE && t.push(n.semanticContext);
    }
    return t;
  }
  optimizeConfigs(t) {
    if (this.readOnly) throw "This set is readonly";
    if (this.configLookup.length !== 0) for (let e = 0; e < this.configs.length; e++) {
      const n = this.configs[e];
      n.context = t.getCachedContext(n.context);
    }
  }
  addAll(t) {
    for (let e = 0; e < t.length; e++) this.add(t[e]);
    return !1;
  }
  equals(t) {
    return this === t || t instanceof v && ht(this.configs, t.configs) && this.fullCtx === t.fullCtx && this.uniqueAlt === t.uniqueAlt && this.conflictingAlts === t.conflictingAlts && this.hasSemanticContext === t.hasSemanticContext && this.dipsIntoOuterContext === t.dipsIntoOuterContext;
  }
  hashCode() {
    const t = new U();
    return t.update(this.configs), t.finish();
  }
  updateHashCode(t) {
    this.readOnly ? (this.cachedHashCode === -1 && (this.cachedHashCode = this.hashCode()), t.update(this.cachedHashCode)) : t.update(this.hashCode());
  }
  isEmpty() {
    return this.configs.length === 0;
  }
  contains(t) {
    if (this.configLookup === null) throw "This method is not implemented for readonly sets.";
    return this.configLookup.contains(t);
  }
  containsFast(t) {
    if (this.configLookup === null) throw "This method is not implemented for readonly sets.";
    return this.configLookup.containsFast(t);
  }
  clear() {
    if (this.readOnly) throw "This set is readonly";
    this.configs = [], this.cachedHashCode = -1, this.configLookup = new M();
  }
  setReadonly(t) {
    this.readOnly = t, t && (this.configLookup = null);
  }
  toString() {
    return G(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== N.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (this.conflictingAlts !== null ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
  }
  get items() {
    return this.configs;
  }
  get length() {
    return this.configs.length;
  }
}
class W {
  constructor(t, e) {
    return t === null && (t = -1), e === null && (e = new v()), this.stateNumber = t, this.configs = e, this.edges = null, this.isAcceptState = !1, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = !1, this.predicates = null, this;
  }
  getAltSet() {
    const t = new M();
    if (this.configs !== null) for (let e = 0; e < this.configs.length; e++) {
      const n = this.configs[e];
      t.add(n.alt);
    }
    return t.length === 0 ? null : t;
  }
  equals(t) {
    return this === t || t instanceof W && this.configs.equals(t.configs);
  }
  toString() {
    let t = this.stateNumber + ":" + this.configs;
    return this.isAcceptState && (t += "=>", this.predicates !== null ? t += this.predicates : t += this.prediction), t;
  }
  hashCode() {
    const t = new U();
    return t.update(this.configs), t.finish();
  }
}
class H {
  constructor(t, e) {
    return this.atn = t, this.sharedContextCache = e, this;
  }
  getCachedContext(t) {
    if (this.sharedContextCache === null) return t;
    const e = new mt();
    return Le(t, this.sharedContextCache, e);
  }
}
H.ERROR = new W(2147483647, new v());
class fe extends v {
  constructor() {
    super(), this.configLookup = new M();
  }
}
class F extends I {
  constructor(t, e) {
    super(t, e);
    const n = t.lexerActionExecutor || null;
    return this.lexerActionExecutor = n || (e !== null ? e.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = e !== null && this.checkNonGreedyDecision(e, this.state), this.hashCodeForConfigSet = F.prototype.hashCode, this.equalsForConfigSet = F.prototype.equals, this;
  }
  updateHashCode(t) {
    t.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
  }
  equals(t) {
    return this === t || t instanceof F && this.passedThroughNonGreedyDecision === t.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(t.lexerActionExecutor) : !t.lexerActionExecutor) && super.equals(t);
  }
  checkNonGreedyDecision(t, e) {
    return t.passedThroughNonGreedyDecision || e instanceof ct && e.nonGreedy;
  }
}
class ft extends J {
  constructor(t, e) {
    super(e.actionType), this.offset = t, this.action = e, this.isPositionDependent = !0;
  }
  execute(t) {
    this.action.execute(t);
  }
  updateHashCode(t) {
    t.update(this.actionType, this.offset, this.action);
  }
  equals(t) {
    return this === t || t instanceof ft && this.offset === t.offset && this.action === t.action;
  }
}
class ot {
  constructor(t) {
    return this.lexerActions = t === null ? [] : t, this.cachedHashCode = U.hashStuff(t), this;
  }
  fixOffsetBeforeMatch(t) {
    let e = null;
    for (let n = 0; n < this.lexerActions.length; n++) !this.lexerActions[n].isPositionDependent || this.lexerActions[n] instanceof ft || (e === null && (e = this.lexerActions.concat([])), e[n] = new ft(t, this.lexerActions[n]));
    return e === null ? this : new ot(e);
  }
  execute(t, e, n) {
    let s = !1;
    const i = e.index;
    try {
      for (let r = 0; r < this.lexerActions.length; r++) {
        let a = this.lexerActions[r];
        if (a instanceof ft) {
          const l = a.offset;
          e.seek(n + l), a = a.action, s = n + l !== i;
        } else a.isPositionDependent && (e.seek(i), s = !1);
        a.execute(t);
      }
    } finally {
      s && e.seek(i);
    }
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(t) {
    t.update(this.cachedHashCode);
  }
  equals(t) {
    if (this === t) return !0;
    if (t instanceof ot) {
      if (this.cachedHashCode != t.cachedHashCode || this.lexerActions.length != t.lexerActions.length) return !1;
      {
        const e = this.lexerActions.length;
        for (let n = 0; n < e; ++n) if (!this.lexerActions[n].equals(t.lexerActions[n])) return !1;
        return !0;
      }
    }
    return !1;
  }
  static append(t, e) {
    if (t === null) return new ot([e]);
    const n = t.lexerActions.concat([e]);
    return new ot(n);
  }
}
function xe(o) {
  o.index = -1, o.line = 0, o.column = -1, o.dfaState = null;
}
class un {
  constructor() {
    xe(this);
  }
  reset() {
    xe(this);
  }
}
class k extends H {
  constructor(t, e, n, s) {
    super(e, s), this.decisionToDFA = n, this.recog = t, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = y.DEFAULT_MODE, this.prevAccept = new un();
  }
  copyState(t) {
    this.column = t.column, this.line = t.line, this.mode = t.mode, this.startIndex = t.startIndex;
  }
  match(t, e) {
    this.mode = e;
    const n = t.mark();
    try {
      this.startIndex = t.index, this.prevAccept.reset();
      const s = this.decisionToDFA[e];
      return s.s0 === null ? this.matchATN(t) : this.execATN(t, s.s0);
    } finally {
      t.release(n);
    }
  }
  reset() {
    this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = y.DEFAULT_MODE;
  }
  matchATN(t) {
    const e = this.atn.modeToStartState[this.mode];
    k.debug && console.log("matchATN mode " + this.mode + " start: " + e);
    const n = this.mode, s = this.computeStartState(t, e), i = s.hasSemanticContext;
    s.hasSemanticContext = !1;
    const r = this.addDFAState(s);
    i || (this.decisionToDFA[this.mode].s0 = r);
    const a = this.execATN(t, r);
    return k.debug && console.log("DFA after matchATN: " + this.decisionToDFA[n].toLexerString()), a;
  }
  execATN(t, e) {
    k.debug && console.log("start state closure=" + e.configs), e.isAcceptState && this.captureSimState(this.prevAccept, t, e);
    let n = t.LA(1), s = e;
    for (; ;) {
      k.debug && console.log("execATN loop starting closure: " + s.configs);
      let i = this.getExistingTargetState(s, n);
      if (i === null && (i = this.computeTargetState(t, s, n)), i === H.ERROR || (n !== u.EOF && this.consume(t), i.isAcceptState && (this.captureSimState(this.prevAccept, t, i), n === u.EOF))) break;
      n = t.LA(1), s = i;
    }
    return this.failOrAccept(this.prevAccept, t, s.configs, n);
  }
  getExistingTargetState(t, e) {
    if (t.edges === null || e < k.MIN_DFA_EDGE || e > k.MAX_DFA_EDGE) return null;
    let n = t.edges[e - k.MIN_DFA_EDGE];
    return n === void 0 && (n = null), k.debug && n !== null && console.log("reuse state " + t.stateNumber + " edge to " + n.stateNumber), n;
  }
  computeTargetState(t, e, n) {
    const s = new fe();
    return this.getReachableConfigSet(t, e.configs, s, n), s.items.length === 0 ? (s.hasSemanticContext || this.addDFAEdge(e, n, H.ERROR), H.ERROR) : this.addDFAEdge(e, n, null, s);
  }
  failOrAccept(t, e, n, s) {
    if (this.prevAccept.dfaState !== null) {
      const i = t.dfaState.lexerActionExecutor;
      return this.accept(e, i, this.startIndex, t.index, t.line, t.column), t.dfaState.prediction;
    }
    if (s === u.EOF && e.index === this.startIndex) return u.EOF;
    throw new te(this.recog, e, this.startIndex, n);
  }
  getReachableConfigSet(t, e, n, s) {
    let i = N.INVALID_ALT_NUMBER;
    for (let r = 0; r < e.items.length; r++) {
      const a = e.items[r], l = a.alt === i;
      if (!l || !a.passedThroughNonGreedyDecision) {
        k.debug && console.log(`testing %s at %s
`, this.getTokenName(s), a.toString(this.recog, !0));
        for (let h = 0; h < a.state.transitions.length; h++) {
          const c = a.state.transitions[h], d = this.getReachableTarget(c, s);
          if (d !== null) {
            let p = a.lexerActionExecutor;
            p !== null && (p = p.fixOffsetBeforeMatch(t.index - this.startIndex));
            const C = s === u.EOF, m = new F({ state: d, lexerActionExecutor: p }, a);
            this.closure(t, m, n, l, !0, C) && (i = a.alt);
          }
        }
      }
    }
  }
  accept(t, e, n, s, i, r) {
    k.debug && console.log(`ACTION %s
`, e), t.seek(s), this.line = i, this.column = r, e !== null && this.recog !== null && e.execute(this.recog, t, n);
  }
  getReachableTarget(t, e) {
    return t.matches(e, 0, y.MAX_CHAR_VALUE) ? t.target : null;
  }
  computeStartState(t, e) {
    const n = x.EMPTY, s = new fe();
    for (let i = 0; i < e.transitions.length; i++) {
      const r = e.transitions[i].target, a = new F({ state: r, alt: i + 1, context: n }, null);
      this.closure(t, a, s, !1, !1, !1);
    }
    return s;
  }
  closure(t, e, n, s, i, r) {
    let a = null;
    if (k.debug && console.log("closure(" + e.toString(this.recog, !0) + ")"), e.state instanceof b) {
      if (k.debug && (this.recog !== null ? console.log(`closure at %s rule stop %s
`, this.recog.ruleNames[e.state.ruleIndex], e) : console.log(`closure at rule stop %s
`, e)), e.context === null || e.context.hasEmptyPath()) {
        if (e.context === null || e.context.isEmpty()) return n.add(e), !0;
        n.add(new F({ state: e.state, context: x.EMPTY }, e)), s = !0;
      }
      if (e.context !== null && !e.context.isEmpty()) {
        for (let l = 0; l < e.context.length; l++) if (e.context.getReturnState(l) !== x.EMPTY_RETURN_STATE) {
          const h = e.context.getParent(l), c = this.atn.states[e.context.getReturnState(l)];
          a = new F({ state: c, context: h }, e), s = this.closure(t, a, n, s, i, r);
        }
      }
      return s;
    }
    e.state.epsilonOnlyTransitions || s && e.passedThroughNonGreedyDecision || n.add(e);
    for (let l = 0; l < e.state.transitions.length; l++) {
      const h = e.state.transitions[l];
      a = this.getEpsilonTarget(t, e, h, n, i, r), a !== null && (s = this.closure(t, a, n, s, i, r));
    }
    return s;
  }
  getEpsilonTarget(t, e, n, s, i, r) {
    let a = null;
    if (n.serializationType === g.RULE) {
      const l = w.create(e.context, n.followState.stateNumber);
      a = new F({ state: n.target, context: l }, e);
    } else {
      if (n.serializationType === g.PRECEDENCE) throw "Precedence predicates are not supported in lexers.";
      if (n.serializationType === g.PREDICATE) k.debug && console.log("EVAL rule " + n.ruleIndex + ":" + n.predIndex), s.hasSemanticContext = !0, this.evaluatePredicate(t, n.ruleIndex, n.predIndex, i) && (a = new F({ state: n.target }, e));
      else if (n.serializationType === g.ACTION) if (e.context === null || e.context.hasEmptyPath()) {
        const l = ot.append(e.lexerActionExecutor, this.atn.lexerActions[n.actionIndex]);
        a = new F({ state: n.target, lexerActionExecutor: l }, e);
      } else a = new F({ state: n.target }, e);
      else n.serializationType === g.EPSILON ? a = new F({ state: n.target }, e) : n.serializationType !== g.ATOM && n.serializationType !== g.RANGE && n.serializationType !== g.SET || r && n.matches(u.EOF, 0, y.MAX_CHAR_VALUE) && (a = new F({ state: n.target }, e));
    }
    return a;
  }
  evaluatePredicate(t, e, n, s) {
    if (this.recog === null) return !0;
    if (!s) return this.recog.sempred(null, e, n);
    const i = this.column, r = this.line, a = t.index, l = t.mark();
    try {
      return this.consume(t), this.recog.sempred(null, e, n);
    } finally {
      this.column = i, this.line = r, t.seek(a), t.release(l);
    }
  }
  captureSimState(t, e, n) {
    t.index = e.index, t.line = this.line, t.column = this.column, t.dfaState = n;
  }
  addDFAEdge(t, e, n, s) {
    if (n === void 0 && (n = null), s === void 0 && (s = null), n === null && s !== null) {
      const i = s.hasSemanticContext;
      if (s.hasSemanticContext = !1, n = this.addDFAState(s), i) return n;
    }
    return e < k.MIN_DFA_EDGE || e > k.MAX_DFA_EDGE || (k.debug && console.log("EDGE " + t + " -> " + n + " upon " + e), t.edges === null && (t.edges = []), t.edges[e - k.MIN_DFA_EDGE] = n), n;
  }
  addDFAState(t) {
    const e = new W(null, t);
    let n = null;
    for (let a = 0; a < t.items.length; a++) {
      const l = t.items[a];
      if (l.state instanceof b) {
        n = l;
        break;
      }
    }
    n !== null && (e.isAcceptState = !0, e.lexerActionExecutor = n.lexerActionExecutor, e.prediction = this.atn.ruleToTokenType[n.state.ruleIndex]);
    const s = this.decisionToDFA[this.mode], i = s.states.get(e);
    if (i !== null) return i;
    const r = e;
    return r.stateNumber = s.states.length, t.setReadonly(!0), r.configs = t, s.states.add(r), r;
  }
  getDFA(t) {
    return this.decisionToDFA[t];
  }
  getText(t) {
    return t.getText(this.startIndex, t.index - 1);
  }
  consume(t) {
    t.LA(1) === 10 ? (this.line += 1, this.column = 0) : this.column += 1, t.consume();
  }
  getTokenName(t) {
    return t === -1 ? "EOF" : "'" + String.fromCharCode(t) + "'";
  }
}
k.debug = !1, k.dfa_debug = !1, k.MIN_DFA_EDGE = 0, k.MAX_DFA_EDGE = 127;
class Re {
  constructor(t, e) {
    this.alt = e, this.pred = t;
  }
  toString() {
    return "(" + this.pred + ", " + this.alt + ")";
  }
}
class dn {
  constructor() {
    this.data = {};
  }
  get(t) {
    return this.data["k-" + t] || null;
  }
  set(t, e) {
    this.data["k-" + t] = e;
  }
  values() {
    return Object.keys(this.data).filter((t) => t.startsWith("k-")).map((t) => this.data[t], this);
  }
}
const z = {
  SLL: 0, LL: 1, LL_EXACT_AMBIG_DETECTION: 2, hasSLLConflictTerminatingPrediction: function (o, t) {
    if (z.allConfigsInRuleStopStates(t)) return !0;
    if (o === z.SLL && t.hasSemanticContext) {
      const n = new v();
      for (let s = 0; s < t.items.length; s++) {
        let i = t.items[s];
        i = new I({ semanticContext: A.NONE }, i), n.add(i);
      }
      t = n;
    }
    const e = z.getConflictingAltSubsets(t);
    return z.hasConflictingAltSet(e) && !z.hasStateAssociatedWithOneAlt(t);
  }, hasConfigInRuleStopState: function (o) {
    for (let t = 0; t < o.items.length; t++) if (o.items[t].state instanceof b) return !0;
    return !1;
  }, allConfigsInRuleStopStates: function (o) {
    for (let t = 0; t < o.items.length; t++) if (!(o.items[t].state instanceof b)) return !1;
    return !0;
  }, resolvesToJustOneViableAlt: function (o) {
    return z.getSingleViableAlt(o);
  }, allSubsetsConflict: function (o) {
    return !z.hasNonConflictingAltSet(o);
  }, hasNonConflictingAltSet: function (o) {
    for (let t = 0; t < o.length; t++) if (o[t].length === 1) return !0;
    return !1;
  }, hasConflictingAltSet: function (o) {
    for (let t = 0; t < o.length; t++) if (o[t].length > 1) return !0;
    return !1;
  }, allSubsetsEqual: function (o) {
    let t = null;
    for (let e = 0; e < o.length; e++) {
      const n = o[e];
      if (t === null) t = n;
      else if (n !== t) return !1;
    }
    return !0;
  }, getUniqueAlt: function (o) {
    const t = z.getAlts(o);
    return t.length === 1 ? t.minValue() : N.INVALID_ALT_NUMBER;
  }, getAlts: function (o) {
    const t = new R();
    return o.map(function (e) {
      t.or(e);
    }), t;
  }, getConflictingAltSubsets: function (o) {
    const t = new mt();
    return t.hashFunction = function (e) {
      U.hashStuff(e.state.stateNumber, e.context);
    }, t.equalsFunction = function (e, n) {
      return e.state.stateNumber === n.state.stateNumber && e.context.equals(n.context);
    }, o.items.map(function (e) {
      let n = t.get(e);
      n === null && (n = new R(), t.set(e, n)), n.set(e.alt);
    }), t.getValues();
  }, getStateToAltMap: function (o) {
    const t = new dn();
    return o.items.map(function (e) {
      let n = t.get(e.state);
      n === null && (n = new R(), t.set(e.state, n)), n.set(e.alt);
    }), t;
  }, hasStateAssociatedWithOneAlt: function (o) {
    const t = z.getStateToAltMap(o).values();
    for (let e = 0; e < t.length; e++) if (t[e].length === 1) return !0;
    return !1;
  }, getSingleViableAlt: function (o) {
    let t = null;
    for (let e = 0; e < o.length; e++) {
      const n = o[e].minValue();
      if (t === null) t = n;
      else if (t !== n) return N.INVALID_ALT_NUMBER;
    }
    return t;
  }
}, O = z;
class Ot extends Z {
  constructor(t, e, n, s, i, r) {
    r = r || t._ctx, s = s || t.getCurrentToken(), n = n || t.getCurrentToken(), e = e || t.getInputStream(), super({ message: "", recognizer: t, input: e, ctx: r }), this.deadEndConfigs = i, this.startToken = n, this.offendingToken = s;
  }
}
class pn {
  constructor(t) {
    this.defaultMapCtor = t || mt, this.cacheMap = new this.defaultMapCtor();
  }
  get(t, e) {
    const n = this.cacheMap.get(t) || null;
    return n === null ? null : n.get(e) || null;
  }
  set(t, e, n) {
    let s = this.cacheMap.get(t) || null;
    s === null && (s = new this.defaultMapCtor(), this.cacheMap.set(t, s)), s.set(e, n);
  }
}
class be extends H {
  constructor(t, e, n, s) {
    super(e, s), this.parser = t, this.decisionToDFA = n, this.predictionMode = O.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = !1, this.debug_closure = !1, this.debug_add = !1, this.trace_atn_sim = !1, this.dfa_debug = !1, this.retry_debug = !1;
  }
  reset() {
  }
  adaptivePredict(t, e, n) {
    (this.debug || this.trace_atn_sim) && console.log("adaptivePredict decision " + e + " exec LA(1)==" + this.getLookaheadName(t) + " line " + t.LT(1).line + ":" + t.LT(1).column), this._input = t, this._startIndex = t.index, this._outerContext = n;
    const s = this.decisionToDFA[e];
    this._dfa = s;
    const i = t.mark(), r = t.index;
    try {
      let a;
      if (a = s.precedenceDfa ? s.getPrecedenceStartState(this.parser.getPrecedence()) : s.s0, a === null) {
        n === null && (n = nt.EMPTY), this.debug && console.log("predictATN decision " + s.decision + " exec LA(1)==" + this.getLookaheadName(t) + ", outerContext=" + n.toString(this.parser.ruleNames));
        let c = this.computeStartState(s.atnStartState, nt.EMPTY, !1);
        s.precedenceDfa ? (s.s0.configs = c, c = this.applyPrecedenceFilter(c), a = this.addDFAState(s, new W(null, c)), s.setPrecedenceStartState(this.parser.getPrecedence(), a)) : (a = this.addDFAState(s, new W(null, c)), s.s0 = a);
      }
      const l = this.execATN(s, a, t, r, n);
      return this.debug && console.log("DFA after predictATN: " + s.toString(this.parser.literalNames, this.parser.symbolicNames)), l;
    } finally {
      this._dfa = null, this.mergeCache = null, t.seek(r), t.release(i);
    }
  }
  execATN(t, e, n, s, i) {
    let r;
    (this.debug || this.trace_atn_sim) && console.log("execATN decision " + t.decision + ", DFA state " + e + ", LA(1)==" + this.getLookaheadName(n) + " line " + n.LT(1).line + ":" + n.LT(1).column);
    let a = e;
    this.debug && console.log("s0 = " + e);
    let l = n.LA(1);
    for (; ;) {
      let h = this.getExistingTargetState(a, l);
      if (h === null && (h = this.computeTargetState(t, a, l)), h === H.ERROR) {
        const c = this.noViableAlt(n, i, a.configs, s);
        if (n.seek(s), r = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(a.configs, i), r !== N.INVALID_ALT_NUMBER) return r;
        throw c;
      }
      if (h.requiresFullContext && this.predictionMode !== O.SLL) {
        let c = null;
        if (h.predicates !== null) {
          this.debug && console.log("DFA state has preds in DFA sim LL failover");
          const C = n.index;
          if (C !== s && n.seek(s), c = this.evalSemanticContext(h.predicates, i, !0), c.length === 1) return this.debug && console.log("Full LL avoided"), c.minValue();
          C !== s && n.seek(C);
        }
        this.dfa_debug && console.log("ctx sensitive state " + i + " in " + h);
        const d = !0, p = this.computeStartState(t.atnStartState, i, d);
        return this.reportAttemptingFullContext(t, c, h.configs, s, n.index), r = this.execATNWithFullContext(t, h, p, n, s, i), r;
      }
      if (h.isAcceptState) {
        if (h.predicates === null) return h.prediction;
        const c = n.index;
        n.seek(s);
        const d = this.evalSemanticContext(h.predicates, i, !0);
        if (d.length === 0) throw this.noViableAlt(n, i, h.configs, s);
        return d.length === 1 || this.reportAmbiguity(t, h, s, c, !1, d, h.configs), d.minValue();
      }
      a = h, l !== u.EOF && (n.consume(), l = n.LA(1));
    }
  }
  getExistingTargetState(t, e) {
    const n = t.edges;
    return n === null ? null : n[e + 1] || null;
  }
  computeTargetState(t, e, n) {
    const s = this.computeReachSet(e.configs, n, !1);
    if (s === null) return this.addDFAEdge(t, e, n, H.ERROR), H.ERROR;
    let i = new W(null, s);
    const r = this.getUniqueAlt(s);
    if (this.debug) {
      const a = O.getConflictingAltSubsets(s);
      console.log("SLL altSubSets=" + G(a) + ", configs=" + s + ", predict=" + r + ", allSubsetsConflict=" + O.allSubsetsConflict(a) + ", conflictingAlts=" + this.getConflictingAlts(s));
    }
    return r !== N.INVALID_ALT_NUMBER ? (i.isAcceptState = !0, i.configs.uniqueAlt = r, i.prediction = r) : O.hasSLLConflictTerminatingPrediction(this.predictionMode, s) && (i.configs.conflictingAlts = this.getConflictingAlts(s), i.requiresFullContext = !0, i.isAcceptState = !0, i.prediction = i.configs.conflictingAlts.minValue()), i.isAcceptState && i.configs.hasSemanticContext && (this.predicateDFAState(i, this.atn.getDecisionState(t.decision)), i.predicates !== null && (i.prediction = N.INVALID_ALT_NUMBER)), i = this.addDFAEdge(t, e, n, i), i;
  }
  predicateDFAState(t, e) {
    const n = e.transitions.length, s = this.getConflictingAltsOrUniqueAlt(t.configs), i = this.getPredsForAmbigAlts(s, t.configs, n);
    i !== null ? (t.predicates = this.getPredicatePredictions(s, i), t.prediction = N.INVALID_ALT_NUMBER) : t.prediction = s.minValue();
  }
  execATNWithFullContext(t, e, n, s, i, r) {
    (this.debug || this.trace_atn_sim) && console.log("execATNWithFullContext " + n);
    let a, l = !1, h = n;
    s.seek(i);
    let c = s.LA(1), d = -1;
    for (; ;) {
      if (a = this.computeReachSet(h, c, !0), a === null) {
        const C = this.noViableAlt(s, r, h, i);
        s.seek(i);
        const m = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(h, r);
        if (m !== N.INVALID_ALT_NUMBER) return m;
        throw C;
      }
      const p = O.getConflictingAltSubsets(a);
      if (this.debug && console.log("LL altSubSets=" + p + ", predict=" + O.getUniqueAlt(p) + ", resolvesToJustOneViableAlt=" + O.resolvesToJustOneViableAlt(p)), a.uniqueAlt = this.getUniqueAlt(a), a.uniqueAlt !== N.INVALID_ALT_NUMBER) {
        d = a.uniqueAlt;
        break;
      }
      if (this.predictionMode !== O.LL_EXACT_AMBIG_DETECTION) {
        if (d = O.resolvesToJustOneViableAlt(p), d !== N.INVALID_ALT_NUMBER) break;
      } else if (O.allSubsetsConflict(p) && O.allSubsetsEqual(p)) {
        l = !0, d = O.getSingleViableAlt(p);
        break;
      }
      h = a, c !== u.EOF && (s.consume(), c = s.LA(1));
    }
    return a.uniqueAlt !== N.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(t, d, a, i, s.index), d) : (this.reportAmbiguity(t, e, i, s.index, l, null, a), d);
  }
  computeReachSet(t, e, n) {
    this.debug && console.log("in computeReachSet, starting closure: " + t), this.mergeCache === null && (this.mergeCache = new pn());
    const s = new v(n);
    let i = null;
    for (let a = 0; a < t.items.length; a++) {
      const l = t.items[a];
      if (this.debug && console.log("testing " + this.getTokenName(e) + " at " + l), l.state instanceof b) (n || e === u.EOF) && (i === null && (i = []), i.push(l), this.debug_add && console.log("added " + l + " to skippedStopStates"));
      else for (let h = 0; h < l.state.transitions.length; h++) {
        const c = l.state.transitions[h], d = this.getReachableTarget(c, e);
        if (d !== null) {
          const p = new I({ state: d }, l);
          s.add(p, this.mergeCache), this.debug_add && console.log("added " + p + " to intermediate");
        }
      }
    }
    let r = null;
    if (i === null && e !== u.EOF && (s.items.length === 1 || this.getUniqueAlt(s) !== N.INVALID_ALT_NUMBER) && (r = s), r === null) {
      r = new v(n);
      const a = new M(), l = e === u.EOF;
      for (let h = 0; h < s.items.length; h++) this.closure(s.items[h], r, a, !1, n, l);
    }
    if (e === u.EOF && (r = this.removeAllConfigsNotInRuleStopState(r, r === s)), !(i === null || n && O.hasConfigInRuleStopState(r))) for (let a = 0; a < i.length; a++) r.add(i[a], this.mergeCache);
    return this.trace_atn_sim && console.log("computeReachSet " + t + " -> " + r), r.items.length === 0 ? null : r;
  }
  removeAllConfigsNotInRuleStopState(t, e) {
    if (O.allConfigsInRuleStopStates(t)) return t;
    const n = new v(t.fullCtx);
    for (let s = 0; s < t.items.length; s++) {
      const i = t.items[s];
      if (i.state instanceof b) n.add(i, this.mergeCache);
      else if (e && i.state.epsilonOnlyTransitions && this.atn.nextTokens(i.state).contains(u.EPSILON)) {
        const r = this.atn.ruleToStopState[i.state.ruleIndex];
        n.add(new I({ state: r }, i), this.mergeCache);
      }
    }
    return n;
  }
  computeStartState(t, e, n) {
    const s = $t(this.atn, e), i = new v(n);
    this.trace_atn_sim && console.log("computeStartState from ATN state " + t + " initialContext=" + s.toString(this.parser));
    for (let r = 0; r < t.transitions.length; r++) {
      const a = t.transitions[r].target, l = new I({ state: a, alt: r + 1, context: s }, null), h = new M();
      this.closure(l, i, h, !0, n, !1);
    }
    return i;
  }
  applyPrecedenceFilter(t) {
    let e;
    const n = [], s = new v(t.fullCtx);
    for (let i = 0; i < t.items.length; i++) {
      if (e = t.items[i], e.alt !== 1) continue;
      const r = e.semanticContext.evalPrecedence(this.parser, this._outerContext);
      r !== null && (n[e.state.stateNumber] = e.context, r !== e.semanticContext ? s.add(new I({ semanticContext: r }, e), this.mergeCache) : s.add(e, this.mergeCache));
    }
    for (let i = 0; i < t.items.length; i++) if (e = t.items[i], e.alt !== 1) {
      if (!e.precedenceFilterSuppressed) {
        const r = n[e.state.stateNumber] || null;
        if (r !== null && r.equals(e.context)) continue;
      }
      s.add(e, this.mergeCache);
    }
    return s;
  }
  getReachableTarget(t, e) {
    return t.matches(e, 0, this.atn.maxTokenType) ? t.target : null;
  }
  getPredsForAmbigAlts(t, e, n) {
    let s = [];
    for (let r = 0; r < e.items.length; r++) {
      const a = e.items[r];
      t.get(a.alt) && (s[a.alt] = A.orContext(s[a.alt] || null, a.semanticContext));
    }
    let i = 0;
    for (let r = 1; r < n + 1; r++) {
      const a = s[r] || null;
      a === null ? s[r] = A.NONE : a !== A.NONE && (i += 1);
    }
    return i === 0 && (s = null), this.debug && console.log("getPredsForAmbigAlts result " + G(s)), s;
  }
  getPredicatePredictions(t, e) {
    const n = [];
    let s = !1;
    for (let i = 1; i < e.length; i++) {
      const r = e[i];
      t !== null && t.get(i) && n.push(new Re(r, i)), r !== A.NONE && (s = !0);
    }
    return s ? n : null;
  }
  getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(t, e) {
    const n = this.splitAccordingToSemanticValidity(t, e), s = n[0], i = n[1];
    let r = this.getAltThatFinishedDecisionEntryRule(s);
    return r !== N.INVALID_ALT_NUMBER || i.items.length > 0 && (r = this.getAltThatFinishedDecisionEntryRule(i), r !== N.INVALID_ALT_NUMBER) ? r : N.INVALID_ALT_NUMBER;
  }
  getAltThatFinishedDecisionEntryRule(t) {
    const e = [];
    for (let n = 0; n < t.items.length; n++) {
      const s = t.items[n];
      (s.reachesIntoOuterContext > 0 || s.state instanceof b && s.context.hasEmptyPath()) && e.indexOf(s.alt) < 0 && e.push(s.alt);
    }
    return e.length === 0 ? N.INVALID_ALT_NUMBER : Math.min.apply(null, e);
  }
  splitAccordingToSemanticValidity(t, e) {
    const n = new v(t.fullCtx), s = new v(t.fullCtx);
    for (let i = 0; i < t.items.length; i++) {
      const r = t.items[i];
      r.semanticContext !== A.NONE ? r.semanticContext.evaluate(this.parser, e) ? n.add(r) : s.add(r) : n.add(r);
    }
    return [n, s];
  }
  evalSemanticContext(t, e, n) {
    const s = new R();
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (r.pred === A.NONE) {
        if (s.set(r.alt), !n) break;
        continue;
      }
      const a = r.pred.evaluate(this.parser, e);
      if ((this.debug || this.dfa_debug) && console.log("eval pred " + r + "=" + a), a && ((this.debug || this.dfa_debug) && console.log("PREDICT " + r.alt), s.set(r.alt), !n)) break;
    }
    return s;
  }
  closure(t, e, n, s, i, r) {
    this.closureCheckingStopState(t, e, n, s, i, 0, r);
  }
  closureCheckingStopState(t, e, n, s, i, r, a) {
    if ((this.trace_atn_sim || this.debug_closure) && console.log("closure(" + t.toString(this.parser, !0) + ")"), t.state instanceof b) {
      if (!t.context.isEmpty()) {
        for (let l = 0; l < t.context.length; l++) {
          if (t.context.getReturnState(l) === x.EMPTY_RETURN_STATE) {
            if (i) {
              e.add(new I({ state: t.state, context: x.EMPTY }, t), this.mergeCache);
              continue;
            }
            this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex)), this.closure_(t, e, n, s, i, r, a);
            continue;
          }
          const h = this.atn.states[t.context.getReturnState(l)], c = t.context.getParent(l), d = { state: h, alt: t.alt, context: c, semanticContext: t.semanticContext }, p = new I(d, null);
          p.reachesIntoOuterContext = t.reachesIntoOuterContext, this.closureCheckingStopState(p, e, n, s, i, r - 1, a);
        }
        return;
      }
      if (i) return void e.add(t, this.mergeCache);
      this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex));
    }
    this.closure_(t, e, n, s, i, r, a);
  }
  closure_(t, e, n, s, i, r, a) {
    const l = t.state;
    l.epsilonOnlyTransitions || e.add(t, this.mergeCache);
    for (let h = 0; h < l.transitions.length; h++) {
      if (h === 0 && this.canDropLoopEntryEdgeInLeftRecursiveRule(t)) continue;
      const c = l.transitions[h], d = s && !(c instanceof ve), p = this.getEpsilonTarget(t, c, d, r === 0, i, a);
      if (p !== null) {
        let C = r;
        if (t.state instanceof b) {
          if (this._dfa !== null && this._dfa.precedenceDfa && c.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (p.precedenceFilterSuppressed = !0), p.reachesIntoOuterContext += 1, n.getOrAdd(p) !== p) continue;
          e.dipsIntoOuterContext = !0, C -= 1, this.debug && console.log("dips into outer ctx: " + p);
        } else {
          if (!c.isEpsilon && n.getOrAdd(p) !== p) continue;
          c instanceof Ct && C >= 0 && (C += 1);
        }
        this.closureCheckingStopState(p, e, n, d, i, C, a);
      }
    }
  }
  canDropLoopEntryEdgeInLeftRecursiveRule(t) {
    const e = t.state;
    if (e.stateType !== f.STAR_LOOP_ENTRY || e.stateType !== f.STAR_LOOP_ENTRY || !e.isPrecedenceDecision || t.context.isEmpty() || t.context.hasEmptyPath()) return !1;
    const n = t.context.length;
    for (let r = 0; r < n; r++) if (this.atn.states[t.context.getReturnState(r)].ruleIndex !== e.ruleIndex) return !1;
    const s = e.transitions[0].target.endState.stateNumber, i = this.atn.states[s];
    for (let r = 0; r < n; r++) {
      const a = t.context.getReturnState(r), l = this.atn.states[a];
      if (l.transitions.length !== 1 || !l.transitions[0].isEpsilon) return !1;
      const h = l.transitions[0].target;
      if (!(l.stateType === f.BLOCK_END && h === e || l === i || h === i || h.stateType === f.BLOCK_END && h.transitions.length === 1 && h.transitions[0].isEpsilon && h.transitions[0].target === e)) return !1;
    }
    return !0;
  }
  getRuleName(t) {
    return this.parser !== null && t >= 0 ? this.parser.ruleNames[t] : "<rule " + t + ">";
  }
  getEpsilonTarget(t, e, n, s, i, r) {
    switch (e.serializationType) {
      case g.RULE:
        return this.ruleTransition(t, e);
      case g.PRECEDENCE:
        return this.precedenceTransition(t, e, n, s, i);
      case g.PREDICATE:
        return this.predTransition(t, e, n, s, i);
      case g.ACTION:
        return this.actionTransition(t, e);
      case g.EPSILON:
        return new I({ state: e.target }, t);
      case g.ATOM:
      case g.RANGE:
      case g.SET:
        return r && e.matches(u.EOF, 0, 1) ? new I({ state: e.target }, t) : null;
      default:
        return null;
    }
  }
  actionTransition(t, e) {
    if (this.debug) {
      const n = e.actionIndex === -1 ? 65535 : e.actionIndex;
      console.log("ACTION edge " + e.ruleIndex + ":" + n);
    }
    return new I({ state: e.target }, t);
  }
  precedenceTransition(t, e, n, s, i) {
    this.debug && (console.log("PRED (collectPredicates=" + n + ") " + e.precedence + ">=_p, ctx dependent=true"), this.parser !== null && console.log("context surrounding pred is " + G(this.parser.getRuleInvocationStack())));
    let r = null;
    if (n && s) if (i) {
      const a = this._input.index;
      this._input.seek(this._startIndex);
      const l = e.getPredicate().evaluate(this.parser, this._outerContext);
      this._input.seek(a), l && (r = new I({ state: e.target }, t));
    } else {
      const a = A.andContext(t.semanticContext, e.getPredicate());
      r = new I({ state: e.target, semanticContext: a }, t);
    }
    else r = new I({ state: e.target }, t);
    return this.debug && console.log("config from pred transition=" + r), r;
  }
  predTransition(t, e, n, s, i) {
    this.debug && (console.log("PRED (collectPredicates=" + n + ") " + e.ruleIndex + ":" + e.predIndex + ", ctx dependent=" + e.isCtxDependent), this.parser !== null && console.log("context surrounding pred is " + G(this.parser.getRuleInvocationStack())));
    let r = null;
    if (n && (e.isCtxDependent && s || !e.isCtxDependent)) if (i) {
      const a = this._input.index;
      this._input.seek(this._startIndex);
      const l = e.getPredicate().evaluate(this.parser, this._outerContext);
      this._input.seek(a), l && (r = new I({ state: e.target }, t));
    } else {
      const a = A.andContext(t.semanticContext, e.getPredicate());
      r = new I({ state: e.target, semanticContext: a }, t);
    }
    else r = new I({ state: e.target }, t);
    return this.debug && console.log("config from pred transition=" + r), r;
  }
  ruleTransition(t, e) {
    this.debug && console.log("CALL rule " + this.getRuleName(e.target.ruleIndex) + ", ctx=" + t.context);
    const n = e.followState, s = w.create(t.context, n.stateNumber);
    return new I({ state: e.target, context: s }, t);
  }
  getConflictingAlts(t) {
    const e = O.getConflictingAltSubsets(t);
    return O.getAlts(e);
  }
  getConflictingAltsOrUniqueAlt(t) {
    let e = null;
    return t.uniqueAlt !== N.INVALID_ALT_NUMBER ? (e = new R(), e.set(t.uniqueAlt)) : e = t.conflictingAlts, e;
  }
  getTokenName(t) {
    if (t === u.EOF) return "EOF";
    if (this.parser !== null && this.parser.literalNames !== null) {
      if (!(t >= this.parser.literalNames.length && t >= this.parser.symbolicNames.length)) return (this.parser.literalNames[t] || this.parser.symbolicNames[t]) + "<" + t + ">";
      console.log(t + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
    }
    return "" + t;
  }
  getLookaheadName(t) {
    return this.getTokenName(t.LA(1));
  }
  dumpDeadEndConfigs(t) {
    console.log("dead end configs: ");
    const e = t.getDeadEndConfigs();
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      let i = "no edges";
      if (s.state.transitions.length > 0) {
        const r = s.state.transitions[0];
        r instanceof Mt ? i = "Atom " + this.getTokenName(r.label) : r instanceof Yt && (i = (r instanceof Kt ? "~" : "") + "Set " + r.set);
      }
      console.error(s.toString(this.parser, !0) + ":" + i);
    }
  }
  noViableAlt(t, e, n, s) {
    return new Ot(this.parser, t, t.get(s), t.LT(1), n, e);
  }
  getUniqueAlt(t) {
    let e = N.INVALID_ALT_NUMBER;
    for (let n = 0; n < t.items.length; n++) {
      const s = t.items[n];
      if (e === N.INVALID_ALT_NUMBER) e = s.alt;
      else if (s.alt !== e) return N.INVALID_ALT_NUMBER;
    }
    return e;
  }
  addDFAEdge(t, e, n, s) {
    if (this.debug && console.log("EDGE " + e + " -> " + s + " upon " + this.getTokenName(n)), s === null) return null;
    if (s = this.addDFAState(t, s), e === null || n < -1 || n > this.atn.maxTokenType) return s;
    if (e.edges === null && (e.edges = []), e.edges[n + 1] = s, this.debug) {
      const i = this.parser === null ? null : this.parser.literalNames, r = this.parser === null ? null : this.parser.symbolicNames;
      console.log(`DFA=
` + t.toString(i, r));
    }
    return s;
  }
  addDFAState(t, e) {
    if (e === H.ERROR) return e;
    const n = t.states.get(e);
    return n !== null ? (this.trace_atn_sim && console.log("addDFAState " + e + " exists"), n) : (e.stateNumber = t.states.length, e.configs.readOnly || (e.configs.optimizeConfigs(this), e.configs.setReadonly(!0)), this.trace_atn_sim && console.log("addDFAState new " + e), t.states.add(e), this.debug && console.log("adding new DFA state: " + e), e);
  }
  reportAttemptingFullContext(t, e, n, s, i) {
    if (this.debug || this.retry_debug) {
      const r = new S(s, i + 1);
      console.log("reportAttemptingFullContext decision=" + t.decision + ":" + n + ", input=" + this.parser.getTokenStream().getText(r));
    }
    this.parser !== null && this.parser.getErrorListener().reportAttemptingFullContext(this.parser, t, s, i, e, n);
  }
  reportContextSensitivity(t, e, n, s, i) {
    if (this.debug || this.retry_debug) {
      const r = new S(s, i + 1);
      console.log("reportContextSensitivity decision=" + t.decision + ":" + n + ", input=" + this.parser.getTokenStream().getText(r));
    }
    this.parser !== null && this.parser.getErrorListener().reportContextSensitivity(this.parser, t, s, i, e, n);
  }
  reportAmbiguity(t, e, n, s, i, r, a) {
    if (this.debug || this.retry_debug) {
      const l = new S(n, s + 1);
      console.log("reportAmbiguity " + r + ":" + a + ", input=" + this.parser.getTokenStream().getText(l));
    }
    this.parser !== null && this.parser.getErrorListener().reportAmbiguity(this.parser, t, n, s, i, r, a);
  }
}
class Fe {
  constructor() {
    this.cache = new mt();
  }
  add(t) {
    if (t === x.EMPTY) return x.EMPTY;
    const e = this.cache.get(t) || null;
    return e !== null ? e : (this.cache.set(t, t), t);
  }
  get(t) {
    return this.cache.get(t) || null;
  }
  get length() {
    return this.cache.length;
  }
}
const gn = { ATN: N, ATNDeserializer: Xt, LexerATNSimulator: k, ParserATNSimulator: be, PredictionMode: O, PredictionContextCache: Fe };
class ee {
  constructor(t, e, n) {
    this.dfa = t, this.literalNames = e || [], this.symbolicNames = n || [];
  }
  toString() {
    if (this.dfa.s0 === null) return null;
    let t = "";
    const e = this.dfa.sortedStates();
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      if (s.edges !== null) {
        const i = s.edges.length;
        for (let r = 0; r < i; r++) {
          const a = s.edges[r] || null;
          a !== null && a.stateNumber !== 2147483647 && (t = t.concat(this.getStateString(s)), t = t.concat("-"), t = t.concat(this.getEdgeLabel(r)), t = t.concat("->"), t = t.concat(this.getStateString(a)), t = t.concat(`
`));
        }
      }
    }
    return t.length === 0 ? null : t;
  }
  getEdgeLabel(t) {
    return t === 0 ? "EOF" : this.literalNames !== null || this.symbolicNames !== null ? this.literalNames[t - 1] || this.symbolicNames[t - 1] : String.fromCharCode(t - 1);
  }
  getStateString(t) {
    const e = (t.isAcceptState ? ":" : "") + "s" + t.stateNumber + (t.requiresFullContext ? "^" : "");
    return t.isAcceptState ? t.predicates !== null ? e + "=>" + G(t.predicates) : e + "=>" + t.prediction.toString() : e;
  }
}
class De extends ee {
  constructor(t) {
    super(t, null);
  }
  getEdgeLabel(t) {
    return "'" + String.fromCharCode(t) + "'";
  }
}
class Pe {
  constructor(t, e) {
    if (e === void 0 && (e = 0), this.atnStartState = t, this.decision = e, this._states = new M(), this.s0 = null, this.precedenceDfa = !1, t instanceof X && t.isPrecedenceDecision) {
      this.precedenceDfa = !0;
      const n = new W(null, new v());
      n.edges = [], n.isAcceptState = !1, n.requiresFullContext = !1, this.s0 = n;
    }
  }
  getPrecedenceStartState(t) {
    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
    return t < 0 || t >= this.s0.edges.length ? null : this.s0.edges[t] || null;
  }
  setPrecedenceStartState(t, e) {
    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
    t < 0 || (this.s0.edges[t] = e);
  }
  setPrecedenceDfa(t) {
    if (this.precedenceDfa !== t) {
      if (this._states = new M(), t) {
        const e = new W(null, new v());
        e.edges = [], e.isAcceptState = !1, e.requiresFullContext = !1, this.s0 = e;
      } else this.s0 = null;
      this.precedenceDfa = t;
    }
  }
  sortedStates() {
    return this._states.values().sort(function (t, e) {
      return t.stateNumber - e.stateNumber;
    });
  }
  toString(t, e) {
    return t = t || null, e = e || null, this.s0 === null ? "" : new ee(this, t, e).toString();
  }
  toLexerString() {
    return this.s0 === null ? "" : new De(this).toString();
  }
  get states() {
    return this._states;
  }
}
const fn = { DFA: Pe, DFASerializer: ee, LexerDFASerializer: De, PredPrediction: Re }, xn = { PredictionContext: x }, mn = { Interval: S, IntervalSet: D };
class ne {
  visitTerminal(t) {
  }
  visitErrorNode(t) {
  }
  enterEveryRule(t) {
  }
  exitEveryRule(t) {
  }
}
class Me {
  visit(t) {
    return Array.isArray(t) ? t.map(function (e) {
      return e.accept(this);
    }, this) : t.accept(this);
  }
  visitChildren(t) {
    return t.children ? this.visit(t.children) : null;
  }
  visitTerminal(t) {
  }
  visitErrorNode(t) {
  }
}
class _t {
  walk(t, e) {
    if (e instanceof kt || e.isErrorNode !== void 0 && e.isErrorNode()) t.visitErrorNode(e);
    else if (e instanceof B) t.visitTerminal(e);
    else {
      this.enterRule(t, e);
      for (let n = 0; n < e.getChildCount(); n++) {
        const s = e.getChild(n);
        this.walk(t, s);
      }
      this.exitRule(t, e);
    }
  }
  enterRule(t, e) {
    const n = e.ruleContext;
    t.enterEveryRule(n), n.enterRule(t);
  }
  exitRule(t, e) {
    const n = e.ruleContext;
    n.exitRule(t), t.exitEveryRule(n);
  }
}
_t.DEFAULT = new _t();
const Tn = { Trees: Oe, RuleNode: xt, ErrorNode: kt, TerminalNode: B, ParseTreeListener: ne, ParseTreeVisitor: Me, ParseTreeWalker: _t };
class lt extends Z {
  constructor(t) {
    super({ message: "", recognizer: t, input: t.getInputStream(), ctx: t._ctx }), this.offendingToken = t.getCurrentToken();
  }
}
class se extends Z {
  constructor(t, e, n) {
    super({ message: Sn(e, n || null), recognizer: t, input: t.getInputStream(), ctx: t._ctx });
    const s = t._interp.atn.states[t.state].transitions[0];
    s instanceof we ? (this.ruleIndex = s.ruleIndex, this.predicateIndex = s.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = e, this.offendingToken = t.getCurrentToken();
  }
}
function Sn(o, t) {
  return t !== null ? t : "failed predicate: {" + o + "}?";
}
class Ue extends Tt {
  constructor(t) {
    super(), t = t || !0, this.exactOnly = t;
  }
  reportAmbiguity(t, e, n, s, i, r, a) {
    if (this.exactOnly && !i) return;
    const l = "reportAmbiguity d=" + this.getDecisionDescription(t, e) + ": ambigAlts=" + this.getConflictingAlts(r, a) + ", input='" + t.getTokenStream().getText(new S(n, s)) + "'";
    t.notifyErrorListeners(l);
  }
  reportAttemptingFullContext(t, e, n, s, i, r) {
    const a = "reportAttemptingFullContext d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new S(n, s)) + "'";
    t.notifyErrorListeners(a);
  }
  reportContextSensitivity(t, e, n, s, i, r) {
    const a = "reportContextSensitivity d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new S(n, s)) + "'";
    t.notifyErrorListeners(a);
  }
  getDecisionDescription(t, e) {
    const n = e.decision, s = e.atnStartState.ruleIndex, i = t.ruleNames;
    if (s < 0 || s >= i.length) return "" + n;
    const r = i[s] || null;
    return r === null || r.length === 0 ? "" + n : `${n} (${r})`;
  }
  getConflictingAlts(t, e) {
    if (t !== null) return t;
    const n = new R();
    for (let s = 0; s < e.items.length; s++) n.set(e.items[s].alt);
    return `{${n.values().join(", ")}}`;
  }
}
class ie extends Error {
  constructor() {
    super(), Error.captureStackTrace(this, ie);
  }
}
class En {
  reset(t) {
  }
  recoverInline(t) {
  }
  recover(t, e) {
  }
  sync(t) {
  }
  inErrorRecoveryMode(t) {
  }
  reportError(t) {
  }
}
class Lt extends En {
  constructor() {
    super(), this.errorRecoveryMode = !1, this.lastErrorIndex = -1, this.lastErrorStates = null, this.nextTokensContext = null, this.nextTokenState = 0;
  }
  reset(t) {
    this.endErrorCondition(t);
  }
  beginErrorCondition(t) {
    this.errorRecoveryMode = !0;
  }
  inErrorRecoveryMode(t) {
    return this.errorRecoveryMode;
  }
  endErrorCondition(t) {
    this.errorRecoveryMode = !1, this.lastErrorStates = null, this.lastErrorIndex = -1;
  }
  reportMatch(t) {
    this.endErrorCondition(t);
  }
  reportError(t, e) {
    this.inErrorRecoveryMode(t) || (this.beginErrorCondition(t), e instanceof Ot ? this.reportNoViableAlternative(t, e) : e instanceof lt ? this.reportInputMismatch(t, e) : e instanceof se ? this.reportFailedPredicate(t, e) : (console.log("unknown recognition error type: " + e.constructor.name), console.log(e.stack), t.notifyErrorListeners(e.getOffendingToken(), e.getMessage(), e)));
  }
  recover(t, e) {
    this.lastErrorIndex === t.getInputStream().index && this.lastErrorStates !== null && this.lastErrorStates.indexOf(t.state) >= 0 && t.consume(), this.lastErrorIndex = t._input.index, this.lastErrorStates === null && (this.lastErrorStates = []), this.lastErrorStates.push(t.state);
    const n = this.getErrorRecoverySet(t);
    this.consumeUntil(t, n);
  }
  sync(t) {
    if (this.inErrorRecoveryMode(t)) return;
    const e = t._interp.atn.states[t.state], n = t.getTokenStream().LA(1), s = t.atn.nextTokens(e);
    if (s.contains(n)) return this.nextTokensContext = null, void (this.nextTokenState = f.INVALID_STATE_NUMBER);
    if (s.contains(u.EPSILON)) this.nextTokensContext === null && (this.nextTokensContext = t._ctx, this.nextTokensState = t._stateNumber);
    else switch (e.stateType) {
      case f.BLOCK_START:
      case f.STAR_BLOCK_START:
      case f.PLUS_BLOCK_START:
      case f.STAR_LOOP_ENTRY:
        if (this.singleTokenDeletion(t) !== null) return;
        throw new lt(t);
      case f.PLUS_LOOP_BACK:
      case f.STAR_LOOP_BACK: {
        this.reportUnwantedToken(t);
        const i = new D();
        i.addSet(t.getExpectedTokens());
        const r = i.addSet(this.getErrorRecoverySet(t));
        this.consumeUntil(t, r);
      }
    }
  }
  reportNoViableAlternative(t, e) {
    const n = t.getTokenStream();
    let s;
    s = n !== null ? e.startToken.type === u.EOF ? "<EOF>" : n.getText(new S(e.startToken.tokenIndex, e.offendingToken.tokenIndex)) : "<unknown input>";
    const i = "no viable alternative at input " + this.escapeWSAndQuote(s);
    t.notifyErrorListeners(i, e.offendingToken, e);
  }
  reportInputMismatch(t, e) {
    const n = "mismatched input " + this.getTokenErrorDisplay(e.offendingToken) + " expecting " + e.getExpectedTokens().toString(t.literalNames, t.symbolicNames);
    t.notifyErrorListeners(n, e.offendingToken, e);
  }
  reportFailedPredicate(t, e) {
    const n = "rule " + t.ruleNames[t._ctx.ruleIndex] + " " + e.message;
    t.notifyErrorListeners(n, e.offendingToken, e);
  }
  reportUnwantedToken(t) {
    if (this.inErrorRecoveryMode(t)) return;
    this.beginErrorCondition(t);
    const e = t.getCurrentToken(), n = "extraneous input " + this.getTokenErrorDisplay(e) + " expecting " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames);
    t.notifyErrorListeners(n, e, null);
  }
  reportMissingToken(t) {
    if (this.inErrorRecoveryMode(t)) return;
    this.beginErrorCondition(t);
    const e = t.getCurrentToken(), n = "missing " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames) + " at " + this.getTokenErrorDisplay(e);
    t.notifyErrorListeners(n, e, null);
  }
  recoverInline(t) {
    const e = this.singleTokenDeletion(t);
    if (e !== null) return t.consume(), e;
    if (this.singleTokenInsertion(t)) return this.getMissingSymbol(t);
    throw new lt(t);
  }
  singleTokenInsertion(t) {
    const e = t.getTokenStream().LA(1), n = t._interp.atn, s = n.states[t.state].transitions[0].target;
    return !!n.nextTokens(s, t._ctx).contains(e) && (this.reportMissingToken(t), !0);
  }
  singleTokenDeletion(t) {
    const e = t.getTokenStream().LA(2);
    if (this.getExpectedTokens(t).contains(e)) {
      this.reportUnwantedToken(t), t.consume();
      const n = t.getCurrentToken();
      return this.reportMatch(t), n;
    }
    return null;
  }
  getMissingSymbol(t) {
    const e = t.getCurrentToken(), n = this.getExpectedTokens(t).first();
    let s;
    s = n === u.EOF ? "<missing EOF>" : "<missing " + t.literalNames[n] + ">";
    let i = e;
    const r = t.getTokenStream().LT(-1);
    return i.type === u.EOF && r !== null && (i = r), t.getTokenFactory().create(i.source, n, s, u.DEFAULT_CHANNEL, -1, -1, i.line, i.column);
  }
  getExpectedTokens(t) {
    return t.getExpectedTokens();
  }
  getTokenErrorDisplay(t) {
    if (t === null) return "<no token>";
    let e = t.text;
    return e === null && (e = t.type === u.EOF ? "<EOF>" : "<" + t.type + ">"), this.escapeWSAndQuote(e);
  }
  escapeWSAndQuote(t) {
    return "'" + (t = (t = (t = t.replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")) + "'";
  }
  getErrorRecoverySet(t) {
    const e = t._interp.atn;
    let n = t._ctx;
    const s = new D();
    for (; n !== null && n.invokingState >= 0;) {
      const i = e.states[n.invokingState].transitions[0], r = e.nextTokens(i.followState);
      s.addSet(r), n = n.parentCtx;
    }
    return s.removeOne(u.EPSILON), s;
  }
  consumeUntil(t, e) {
    let n = t.getTokenStream().LA(1);
    for (; n !== u.EOF && !e.contains(n);) t.consume(), n = t.getTokenStream().LA(1);
  }
}
class Ve extends Lt {
  constructor() {
    super();
  }
  recover(t, e) {
    let n = t._ctx;
    for (; n !== null;) n.exception = e, n = n.parentCtx;
    throw new ie(e);
  }
  recoverInline(t) {
    this.recover(t, new lt(t));
  }
  sync(t) {
  }
}
const Cn = { RecognitionException: Z, NoViableAltException: Ot, LexerNoViableAltException: te, InputMismatchException: lt, FailedPredicateException: se, DiagnosticErrorListener: Ue, BailErrorStrategy: Ve, DefaultErrorStrategy: Lt, ErrorListener: Tt };
class et {
  constructor(t, e) {
    if (this.name = "<empty>", this.strdata = t, this.decodeToUnicodeCodePoints = e || !1, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints) for (let n = 0; n < this.strdata.length;) {
      const s = this.strdata.codePointAt(n);
      this.data.push(s), n += s <= 65535 ? 1 : 2;
    }
    else {
      this.data = new Array(this.strdata.length);
      for (let n = 0; n < this.strdata.length; n++) this.data[n] = this.strdata.charCodeAt(n);
    }
    this._size = this.data.length;
  }
  reset() {
    this._index = 0;
  }
  consume() {
    if (this._index >= this._size) throw "cannot consume EOF";
    this._index += 1;
  }
  LA(t) {
    if (t === 0) return 0;
    t < 0 && (t += 1);
    const e = this._index + t - 1;
    return e < 0 || e >= this._size ? u.EOF : this.data[e];
  }
  LT(t) {
    return this.LA(t);
  }
  mark() {
    return -1;
  }
  release(t) {
  }
  seek(t) {
    t <= this._index ? this._index = t : this._index = Math.min(t, this._size);
  }
  getText(t, e) {
    if (e >= this._size && (e = this._size - 1), t >= this._size) return "";
    if (this.decodeToUnicodeCodePoints) {
      let n = "";
      for (let s = t; s <= e; s++) n += String.fromCodePoint(this.data[s]);
      return n;
    }
    return this.strdata.slice(t, e + 1);
  }
  toString() {
    return this.strdata;
  }
  get index() {
    return this._index;
  }
  get size() {
    return this._size;
  }
}
class re extends et {
  constructor(t, e) {
    super(t, e);
  }
}
var me = tt(763);
const Te = typeof process < "u" && process.versions != null && process.versions.node != null;
class Se extends re {
  static fromPath(t, e, n) {
    if (!Te) throw new Error("FileStream is only available when running in Node!");
    me.readFile(t, e, function (s, i) {
      let r = null;
      i !== null && (r = new et(i, !0)), n(s, r);
    });
  }
  constructor(t, e, n) {
    if (!Te) throw new Error("FileStream is only available when running in Node!");
    super(me.readFileSync(t, e || "utf-8"), n), this.fileName = t;
  }
}
const ze = {
  fromString: function (o) {
    return new et(o, !0);
  }, fromBlob: function (o, t, e, n) {
    const s = new window.FileReader();
    s.onload = function (i) {
      const r = new et(i.target.result, !0);
      e(r);
    }, s.onerror = n, s.readAsText(o, t);
  }, fromBuffer: function (o, t) {
    return new et(o.toString(t), !0);
  }, fromPath: function (o, t, e) {
    Se.fromPath(o, t, e);
  }, fromPathSync: function (o, t) {
    return new Se(o, t);
  }
}, An = {
  arrayToString: G, stringToCharArray: function (o) {
    let t = new Uint16Array(o.length);
    for (let e = 0; e < o.length; e++) t[e] = o.charCodeAt(e);
    return t;
  }
};
class _n {
}
class qe extends _n {
  constructor(t) {
    super(), this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = !1;
  }
  mark() {
    return 0;
  }
  release(t) {
  }
  reset() {
    this.seek(0);
  }
  seek(t) {
    this.lazyInit(), this.index = this.adjustSeekIndex(t);
  }
  get size() {
    return this.tokens.length;
  }
  get(t) {
    return this.lazyInit(), this.tokens[t];
  }
  consume() {
    let t = !1;
    if (t = this.index >= 0 && (this.fetchedEOF ? this.index < this.tokens.length - 1 : this.index < this.tokens.length), !t && this.LA(1) === u.EOF) throw "cannot consume EOF";
    this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1));
  }
  sync(t) {
    const e = t - this.tokens.length + 1;
    return !(e > 0) || this.fetch(e) >= e;
  }
  fetch(t) {
    if (this.fetchedEOF) return 0;
    for (let e = 0; e < t; e++) {
      const n = this.tokenSource.nextToken();
      if (n.tokenIndex = this.tokens.length, this.tokens.push(n), n.type === u.EOF) return this.fetchedEOF = !0, e + 1;
    }
    return t;
  }
  getTokens(t, e, n) {
    if (n === void 0 && (n = null), t < 0 || e < 0) return null;
    this.lazyInit();
    const s = [];
    e >= this.tokens.length && (e = this.tokens.length - 1);
    for (let i = t; i < e; i++) {
      const r = this.tokens[i];
      if (r.type === u.EOF) break;
      (n === null || n.contains(r.type)) && s.push(r);
    }
    return s;
  }
  LA(t) {
    return this.LT(t).type;
  }
  LB(t) {
    return this.index - t < 0 ? null : this.tokens[this.index - t];
  }
  LT(t) {
    if (this.lazyInit(), t === 0) return null;
    if (t < 0) return this.LB(-t);
    const e = this.index + t - 1;
    return this.sync(e), e >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[e];
  }
  adjustSeekIndex(t) {
    return t;
  }
  lazyInit() {
    this.index === -1 && this.setup();
  }
  setup() {
    this.sync(0), this.index = this.adjustSeekIndex(0);
  }
  setTokenSource(t) {
    this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = !1;
  }
  nextTokenOnChannel(t, e) {
    if (this.sync(t), t >= this.tokens.length) return -1;
    let n = this.tokens[t];
    for (; n.channel !== e;) {
      if (n.type === u.EOF) return -1;
      t += 1, this.sync(t), n = this.tokens[t];
    }
    return t;
  }
  previousTokenOnChannel(t, e) {
    for (; t >= 0 && this.tokens[t].channel !== e;) t -= 1;
    return t;
  }
  getHiddenTokensToRight(t, e) {
    if (e === void 0 && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length) throw t + " not in 0.." + this.tokens.length - 1;
    const n = this.nextTokenOnChannel(t + 1, y.DEFAULT_TOKEN_CHANNEL), s = t + 1, i = n === -1 ? this.tokens.length - 1 : n;
    return this.filterForChannel(s, i, e);
  }
  getHiddenTokensToLeft(t, e) {
    if (e === void 0 && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length) throw t + " not in 0.." + this.tokens.length - 1;
    const n = this.previousTokenOnChannel(t - 1, y.DEFAULT_TOKEN_CHANNEL);
    if (n === t - 1) return null;
    const s = n + 1, i = t - 1;
    return this.filterForChannel(s, i, e);
  }
  filterForChannel(t, e, n) {
    const s = [];
    for (let i = t; i < e + 1; i++) {
      const r = this.tokens[i];
      n === -1 ? r.channel !== y.DEFAULT_TOKEN_CHANNEL && s.push(r) : r.channel === n && s.push(r);
    }
    return s.length === 0 ? null : s;
  }
  getSourceName() {
    return this.tokenSource.getSourceName();
  }
  getText(t) {
    this.lazyInit(), this.fill(), t || (t = new S(0, this.tokens.length - 1));
    let e = t.start;
    e instanceof u && (e = e.tokenIndex);
    let n = t.stop;
    if (n instanceof u && (n = n.tokenIndex), e === null || n === null || e < 0 || n < 0) return "";
    n >= this.tokens.length && (n = this.tokens.length - 1);
    let s = "";
    for (let i = e; i < n + 1; i++) {
      const r = this.tokens[i];
      if (r.type === u.EOF) break;
      s += r.text;
    }
    return s;
  }
  fill() {
    for (this.lazyInit(); this.fetch(1e3) === 1e3;);
  }
}
Object.defineProperty(qe, "size", {
  get: function () {
    return this.tokens.length;
  }
});
class He extends qe {
  constructor(t, e) {
    super(t), this.channel = e === void 0 ? u.DEFAULT_CHANNEL : e;
  }
  adjustSeekIndex(t) {
    return this.nextTokenOnChannel(t, this.channel);
  }
  LB(t) {
    if (t === 0 || this.index - t < 0) return null;
    let e = this.index, n = 1;
    for (; n <= t;) e = this.previousTokenOnChannel(e - 1, this.channel), n += 1;
    return e < 0 ? null : this.tokens[e];
  }
  LT(t) {
    if (this.lazyInit(), t === 0) return null;
    if (t < 0) return this.LB(-t);
    let e = this.index, n = 1;
    for (; n < t;) this.sync(e + 1) && (e = this.nextTokenOnChannel(e + 1, this.channel)), n += 1;
    return this.tokens[e];
  }
  getNumberOfOnChannelTokens() {
    let t = 0;
    this.fill();
    for (let e = 0; e < this.tokens.length; e++) {
      const n = this.tokens[e];
      if (n.channel === this.channel && (t += 1), n.type === u.EOF) break;
    }
    return t;
  }
}
class Nn extends ne {
  constructor(t) {
    super(), this.parser = t;
  }
  enterEveryRule(t) {
    console.log("enter   " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
  visitTerminal(t) {
    console.log("consume " + t.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
  }
  exitEveryRule(t) {
    console.log("exit    " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
}
class oe extends At {
  constructor(t) {
    super(), this._input = null, this._errHandler = new Lt(), this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = !0, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t);
  }
  reset() {
    this._input !== null && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(!1), this._precedenceStack = [], this._precedenceStack.push(0), this._interp !== null && this._interp.reset();
  }
  match(t) {
    let e = this.getCurrentToken();
    return e.type === t ? (this._errHandler.reportMatch(this), this.consume()) : (e = this._errHandler.recoverInline(this), this.buildParseTrees && e.tokenIndex === -1 && this._ctx.addErrorNode(e)), e;
  }
  matchWildcard() {
    let t = this.getCurrentToken();
    return t.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t = this._errHandler.recoverInline(this), this.buildParseTrees && t.tokenIndex === -1 && this._ctx.addErrorNode(t)), t;
  }
  getParseListeners() {
    return this._parseListeners || [];
  }
  addParseListener(t) {
    if (t === null) throw "listener";
    this._parseListeners === null && (this._parseListeners = []), this._parseListeners.push(t);
  }
  removeParseListener(t) {
    if (this._parseListeners !== null) {
      const e = this._parseListeners.indexOf(t);
      e >= 0 && this._parseListeners.splice(e, 1), this._parseListeners.length === 0 && (this._parseListeners = null);
    }
  }
  removeParseListeners() {
    this._parseListeners = null;
  }
  triggerEnterRuleEvent() {
    if (this._parseListeners !== null) {
      const t = this._ctx;
      this._parseListeners.forEach(function (e) {
        e.enterEveryRule(t), t.enterRule(e);
      });
    }
  }
  triggerExitRuleEvent() {
    if (this._parseListeners !== null) {
      const t = this._ctx;
      this._parseListeners.slice(0).reverse().forEach(function (e) {
        t.exitRule(e), e.exitEveryRule(t);
      });
    }
  }
  getTokenFactory() {
    return this._input.tokenSource._factory;
  }
  setTokenFactory(t) {
    this._input.tokenSource._factory = t;
  }
  getATNWithBypassAlts() {
    const t = this.getSerializedATN();
    if (t === null) throw "The current parser does not support an ATN with bypass alternatives.";
    let e = this.bypassAltsAtnCache[t];
    if (e === null) {
      const n = new gt();
      n.generateRuleBypassTransitions = !0, e = new Xt(n).deserialize(t), this.bypassAltsAtnCache[t] = e;
    }
    return e;
  }
  getInputStream() {
    return this.getTokenStream();
  }
  setInputStream(t) {
    this.setTokenStream(t);
  }
  getTokenStream() {
    return this._input;
  }
  setTokenStream(t) {
    this._input = null, this.reset(), this._input = t;
  }
  get syntaxErrorsCount() {
    return this._syntaxErrors;
  }
  getCurrentToken() {
    return this._input.LT(1);
  }
  notifyErrorListeners(t, e, n) {
    n = n || null, (e = e || null) === null && (e = this.getCurrentToken()), this._syntaxErrors += 1;
    const s = e.line, i = e.column;
    this.getErrorListener().syntaxError(this, e, s, i, t, n);
  }
  consume() {
    const t = this.getCurrentToken();
    t.type !== u.EOF && this.getInputStream().consume();
    const e = this._parseListeners !== null && this._parseListeners.length > 0;
    if (this.buildParseTrees || e) {
      let n;
      n = this._errHandler.inErrorRecoveryMode(this) ? this._ctx.addErrorNode(t) : this._ctx.addTokenNode(t), n.invokingState = this.state, e && this._parseListeners.forEach(function (s) {
        n instanceof kt || n.isErrorNode !== void 0 && n.isErrorNode() ? s.visitErrorNode(n) : n instanceof B && s.visitTerminal(n);
      });
    }
    return t;
  }
  addContextToParseTree() {
    this._ctx.parentCtx !== null && this._ctx.parentCtx.addChild(this._ctx);
  }
  enterRule(t, e, n) {
    this.state = e, this._ctx = t, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), this.triggerEnterRuleEvent();
  }
  exitRule() {
    this._ctx.stop = this._input.LT(-1), this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx;
  }
  enterOuterAlt(t, e) {
    t.setAltNumber(e), this.buildParseTrees && this._ctx !== t && this._ctx.parentCtx !== null && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t)), this._ctx = t;
  }
  getPrecedence() {
    return this._precedenceStack.length === 0 ? -1 : this._precedenceStack[this._precedenceStack.length - 1];
  }
  enterRecursionRule(t, e, n, s) {
    this.state = e, this._precedenceStack.push(s), this._ctx = t, this._ctx.start = this._input.LT(1), this.triggerEnterRuleEvent();
  }
  pushNewRecursionContext(t, e, n) {
    const s = this._ctx;
    s.parentCtx = t, s.invokingState = e, s.stop = this._input.LT(-1), this._ctx = t, this._ctx.start = s.start, this.buildParseTrees && this._ctx.addChild(s), this.triggerEnterRuleEvent();
  }
  unrollRecursionContexts(t) {
    this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
    const e = this._ctx, n = this.getParseListeners();
    if (n !== null && n.length > 0) for (; this._ctx !== t;) this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
    else this._ctx = t;
    e.parentCtx = t, this.buildParseTrees && t !== null && t.addChild(e);
  }
  getInvokingContext(t) {
    let e = this._ctx;
    for (; e !== null;) {
      if (e.ruleIndex === t) return e;
      e = e.parentCtx;
    }
    return null;
  }
  precpred(t, e) {
    return e >= this._precedenceStack[this._precedenceStack.length - 1];
  }
  inContext(t) {
    return !1;
  }
  isExpectedToken(t) {
    const e = this._interp.atn;
    let n = this._ctx;
    const s = e.states[this.state];
    let i = e.nextTokens(s);
    if (i.contains(t)) return !0;
    if (!i.contains(u.EPSILON)) return !1;
    for (; n !== null && n.invokingState >= 0 && i.contains(u.EPSILON);) {
      const r = e.states[n.invokingState].transitions[0];
      if (i = e.nextTokens(r.followState), i.contains(t)) return !0;
      n = n.parentCtx;
    }
    return !(!i.contains(u.EPSILON) || t !== u.EOF);
  }
  getExpectedTokens() {
    return this._interp.atn.getExpectedTokens(this.state, this._ctx);
  }
  getExpectedTokensWithinCurrentRule() {
    const t = this._interp.atn, e = t.states[this.state];
    return t.nextTokens(e);
  }
  getRuleIndex(t) {
    const e = this.getRuleIndexMap()[t];
    return e !== null ? e : -1;
  }
  getRuleInvocationStack(t) {
    (t = t || null) === null && (t = this._ctx);
    const e = [];
    for (; t !== null;) {
      const n = t.ruleIndex;
      n < 0 ? e.push("n/a") : e.push(this.ruleNames[n]), t = t.parentCtx;
    }
    return e;
  }
  getDFAStrings() {
    return this._interp.decisionToDFA.toString();
  }
  dumpDFA() {
    let t = !1;
    for (let e = 0; e < this._interp.decisionToDFA.length; e++) {
      const n = this._interp.decisionToDFA[e];
      n.states.length > 0 && (t && console.log(), this.printer.println("Decision " + n.decision + ":"), this.printer.print(n.toString(this.literalNames, this.symbolicNames)), t = !0);
    }
  }
  getSourceName() {
    return this._input.getSourceName();
  }
  setTrace(t) {
    t ? (this._tracer !== null && this.removeParseListener(this._tracer), this._tracer = new Nn(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null);
  }
}
oe.bypassAltsAtnCache = {};
class Be extends B {
  constructor(t) {
    super(), this.parentCtx = null, this.symbol = t;
  }
  getChild(t) {
    return null;
  }
  getSymbol() {
    return this.symbol;
  }
  getParent() {
    return this.parentCtx;
  }
  getPayload() {
    return this.symbol;
  }
  getSourceInterval() {
    if (this.symbol === null) return S.INVALID_INTERVAL;
    const t = this.symbol.tokenIndex;
    return new S(t, t);
  }
  getChildCount() {
    return 0;
  }
  accept(t) {
    return t.visitTerminal(this);
  }
  getText() {
    return this.symbol.text;
  }
  toString() {
    return this.symbol.type === u.EOF ? "<EOF>" : this.symbol.text;
  }
}
class Ee extends Be {
  constructor(t) {
    super(t);
  }
  isErrorNode() {
    return !0;
  }
  accept(t) {
    return t.visitErrorNode(this);
  }
}
class ae extends nt {
  constructor(t, e) {
    super(t, e), this.children = null, this.start = null, this.stop = null, this.exception = null;
  }
  copyFrom(t) {
    this.parentCtx = t.parentCtx, this.invokingState = t.invokingState, this.children = null, this.start = t.start, this.stop = t.stop, t.children && (this.children = [], t.children.map(function (e) {
      e instanceof Ee && (this.children.push(e), e.parentCtx = this);
    }, this));
  }
  enterRule(t) {
  }
  exitRule(t) {
  }
  addChild(t) {
    return this.children === null && (this.children = []), this.children.push(t), t;
  }
  removeLastChild() {
    this.children !== null && this.children.pop();
  }
  addTokenNode(t) {
    const e = new Be(t);
    return this.addChild(e), e.parentCtx = this, e;
  }
  addErrorNode(t) {
    const e = new Ee(t);
    return this.addChild(e), e.parentCtx = this, e;
  }
  getChild(t, e) {
    if (e = e || null, this.children === null || t < 0 || t >= this.children.length) return null;
    if (e === null) return this.children[t];
    for (let n = 0; n < this.children.length; n++) {
      const s = this.children[n];
      if (s instanceof e) {
        if (t === 0) return s;
        t -= 1;
      }
    }
    return null;
  }
  getToken(t, e) {
    if (this.children === null || e < 0 || e >= this.children.length) return null;
    for (let n = 0; n < this.children.length; n++) {
      const s = this.children[n];
      if (s instanceof B && s.symbol.type === t) {
        if (e === 0) return s;
        e -= 1;
      }
    }
    return null;
  }
  getTokens(t) {
    if (this.children === null) return [];
    {
      const e = [];
      for (let n = 0; n < this.children.length; n++) {
        const s = this.children[n];
        s instanceof B && s.symbol.type === t && e.push(s);
      }
      return e;
    }
  }
  getTypedRuleContext(t, e) {
    return this.getChild(e, t);
  }
  getTypedRuleContexts(t) {
    if (this.children === null) return [];
    {
      const e = [];
      for (let n = 0; n < this.children.length; n++) {
        const s = this.children[n];
        s instanceof t && e.push(s);
      }
      return e;
    }
  }
  getChildCount() {
    return this.children === null ? 0 : this.children.length;
  }
  getSourceInterval() {
    return this.start === null || this.stop === null ? S.INVALID_INTERVAL : new S(this.start.tokenIndex, this.stop.tokenIndex);
  }
}
nt.EMPTY = new ae();
const K = class K {
  constructor(t) {
    this.tokens = t, this.programs = /* @__PURE__ */ new Map();
  }
  getTokenStream() {
    return this.tokens;
  }
  insertAfter(t, e) {
    let n, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : K.DEFAULT_PROGRAM_NAME;
    n = typeof t == "number" ? t : t.tokenIndex;
    let i = this.getProgram(s), r = new Ce(this.tokens, n, i.length, e);
    i.push(r);
  }
  insertBefore(t, e) {
    let n, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : K.DEFAULT_PROGRAM_NAME;
    n = typeof t == "number" ? t : t.tokenIndex;
    const i = this.getProgram(s), r = new rt(this.tokens, n, i.length, e);
    i.push(r);
  }
  replaceSingle(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : K.DEFAULT_PROGRAM_NAME;
    this.replace(t, t, e, n);
  }
  replace(t, e, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : K.DEFAULT_PROGRAM_NAME;
    if (typeof t != "number" && (t = t.tokenIndex), typeof e != "number" && (e = e.tokenIndex), t > e || t < 0 || e < 0 || e >= this.tokens.size) throw new RangeError(`replace: range invalid: ${t}..${e}(size=${this.tokens.size})`);
    let i = this.getProgram(s), r = new Et(this.tokens, t, e, i.length, n);
    i.push(r);
  }
  delete(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : K.DEFAULT_PROGRAM_NAME;
    e === void 0 && (e = t), this.replace(t, e, null, n);
  }
  getProgram(t) {
    let e = this.programs.get(t);
    return e == null && (e = this.initializeProgram(t)), e;
  }
  initializeProgram(t) {
    const e = [];
    return this.programs.set(t, e), e;
  }
  getText(t) {
    let e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : K.DEFAULT_PROGRAM_NAME;
    e = t instanceof S ? t : new S(0, this.tokens.size - 1), typeof t == "string" && (n = t);
    const s = this.programs.get(n);
    let i = e.start, r = e.stop;
    if (r > this.tokens.size - 1 && (r = this.tokens.size - 1), i < 0 && (i = 0), s == null || s.length === 0) return this.tokens.getText(new S(i, r));
    let a = [], l = this.reduceToSingleOperationPerIndex(s), h = i;
    for (; h <= r && h < this.tokens.size;) {
      let c = l.get(h);
      l.delete(h);
      let d = this.tokens.get(h);
      c == null ? (d.type !== u.EOF && a.push(String(d.text)), h++) : h = c.execute(a);
    }
    if (r === this.tokens.size - 1) for (const c of l.values()) c.index >= this.tokens.size - 1 && a.push(c.text.toString());
    return a.join("");
  }
  reduceToSingleOperationPerIndex(t) {
    for (let n = 0; n < t.length; n++) {
      let s = t[n];
      if (s == null || !(s instanceof Et)) continue;
      let i = s, r = this.getKindOfOps(t, rt, n);
      for (let l of r) l.index === i.index ? (t[l.instructionIndex] = void 0, i.text = l.text.toString() + (i.text != null ? i.text.toString() : "")) : l.index > i.index && l.index <= i.lastIndex && (t[l.instructionIndex] = void 0);
      let a = this.getKindOfOps(t, Et, n);
      for (let l of a) {
        if (l.index >= i.index && l.lastIndex <= i.lastIndex) {
          t[l.instructionIndex] = void 0;
          continue;
        }
        let h = l.lastIndex < i.index || l.index > i.lastIndex;
        if (l.text != null || i.text != null || h) {
          if (!h) throw new Error(`replace op boundaries of ${i} overlap with previous ${l}`);
        } else t[l.instructionIndex] = void 0, i.index = Math.min(l.index, i.index), i.lastIndex = Math.max(l.lastIndex, i.lastIndex);
      }
    }
    for (let n = 0; n < t.length; n++) {
      let s = t[n];
      if (s == null || !(s instanceof rt)) continue;
      let i = s, r = this.getKindOfOps(t, rt, n);
      for (let l of r) l.index === i.index && (l instanceof Ce ? (i.text = this.catOpText(l.text, i.text), t[l.instructionIndex] = void 0) : l instanceof rt && (i.text = this.catOpText(i.text, l.text), t[l.instructionIndex] = void 0));
      let a = this.getKindOfOps(t, Et, n);
      for (let l of a) if (i.index !== l.index) {
        if (i.index >= l.index && i.index <= l.lastIndex) throw new Error(`insert op ${i} within boundaries of previous ${l}`);
      } else l.text = this.catOpText(i.text, l.text), t[n] = void 0;
    }
    let e = /* @__PURE__ */ new Map();
    for (let n of t) if (n != null) {
      if (e.get(n.index) != null) throw new Error("should only be one op per index");
      e.set(n.index, n);
    }
    return e;
  }
  catOpText(t, e) {
    let n = "", s = "";
    return t != null && (n = t.toString()), e != null && (s = e.toString()), n + s;
  }
  getKindOfOps(t, e, n) {
    return t.slice(0, n).filter((s) => s && s instanceof e);
  }
};
Q(K, "DEFAULT_PROGRAM_NAME", "default");
let Nt = K;
class Ye {
  constructor(t, e, n, s) {
    this.tokens = t, this.instructionIndex = n, this.index = e, this.text = s === void 0 ? "" : s;
  }
  toString() {
    let t = this.constructor.name;
    const e = t.indexOf("$");
    return t = t.substring(e + 1, t.length), "<" + t + "@" + this.tokens.get(this.index) + ':"' + this.text + '">';
  }
}
class rt extends Ye {
  constructor(t, e, n, s) {
    super(t, e, n, s);
  }
  execute(t) {
    return this.text && t.push(this.text.toString()), this.tokens.get(this.index).type !== u.EOF && t.push(String(this.tokens.get(this.index).text)), this.index + 1;
  }
}
class Ce extends rt {
  constructor(t, e, n, s) {
    super(t, e + 1, n, s);
  }
}
class Et extends Ye {
  constructor(t, e, n, s, i) {
    super(t, e, s, i), this.lastIndex = n;
  }
  execute(t) {
    return this.text && t.push(this.text.toString()), this.lastIndex + 1;
  }
  toString() {
    return this.text == null ? "<DeleteOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ">" : "<ReplaceOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ':"' + this.text + '">';
  }
}
const kn = { atn: gn, dfa: fn, context: xn, misc: mn, tree: Tn, error: Cn, Token: u, CommonToken: $, CharStreams: ze, CharStream: et, InputStream: re, CommonTokenStream: He, Lexer: y, Parser: oe, ParserRuleContext: ae, Interval: S, IntervalSet: D, LL1Analyzer: st, Utils: An, TokenStreamRewriter: Nt };
var yn = E.MG, Ke = E.fr;
E.sR;
var In = E.Zo;
E.iH;
E.rt;
var On = E.jB, Ge = E.M8;
E.$t;
E.aq;
E.pG;
var Ln = E.eP;
E.KU;
E.zW;
E.IX;
E.mY;
E.a7;
var vn = E.JG, wn = E.ay, Rn = E.X2;
E.WU;
var bn = E.Uw;
E.gw;
var Fn = E.iX, Dn = E.re, Pn = E.Pg, $e = E.tD;
E.R$;
var Mn = E.Dj;
E.m7;
E.NZ;
E.xo;
var We = E.ou;
E.qC;
E.mD;
E.Ay;
const _ = class _ extends vn {
  constructor(t) {
    super(t), this._interp = new wn(this, _._ATN, _.DecisionsToDFA, new $e());
  }
  get grammarFileName() {
    return "BooleanExpr.g4";
  }
  get literalNames() {
    return _.literalNames;
  }
  get symbolicNames() {
    return _.symbolicNames;
  }
  get ruleNames() {
    return _.ruleNames;
  }
  get serializedATN() {
    return _._serializedATN;
  }
  get channelNames() {
    return _.channelNames;
  }
  get modeNames() {
    return _.modeNames;
  }
  static get _ATN() {
    return _.__ATN || (_.__ATN = new Ke().deserialize(_._serializedATN)), _.__ATN;
  }
};
_.T__0 = 1, _.T__1 = 2, _.AND = 3, _.OR = 4, _.NOT = 5, _.STRING = 6, _.EMPTY = 7, _.WS = 8, _.EOF = We.EOF, _.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"], _.literalNames = [
  null,
  "'('",
  "')'"
], _.symbolicNames = [
  null,
  null,
  null,
  "AND",
  "OR",
  "NOT",
  "STRING",
  "EMPTY",
  "WS"
], _.modeNames = ["DEFAULT_MODE"], _.ruleNames = [
  "T__0",
  "T__1",
  "AND",
  "OR",
  "NOT",
  "STRING",
  "EMPTY",
  "WS"
], _._serializedATN = [
  4,
  0,
  8,
  66,
  6,
  -1,
  2,
  0,
  7,
  0,
  2,
  1,
  7,
  1,
  2,
  2,
  7,
  2,
  2,
  3,
  7,
  3,
  2,
  4,
  7,
  4,
  2,
  5,
  7,
  5,
  2,
  6,
  7,
  6,
  2,
  7,
  7,
  7,
  1,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  3,
  2,
  28,
  8,
  2,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  3,
  3,
  35,
  8,
  3,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  3,
  4,
  41,
  8,
  4,
  1,
  5,
  1,
  5,
  5,
  5,
  45,
  8,
  5,
  10,
  5,
  12,
  5,
  48,
  9,
  5,
  1,
  5,
  1,
  5,
  4,
  5,
  52,
  8,
  5,
  11,
  5,
  12,
  5,
  53,
  3,
  5,
  56,
  8,
  5,
  1,
  6,
  1,
  6,
  1,
  7,
  4,
  7,
  61,
  8,
  7,
  11,
  7,
  12,
  7,
  62,
  1,
  7,
  1,
  7,
  0,
  0,
  8,
  1,
  1,
  3,
  2,
  5,
  3,
  7,
  4,
  9,
  5,
  11,
  6,
  13,
  7,
  15,
  8,
  1,
  0,
  9,
  2,
  0,
  65,
  65,
  97,
  97,
  2,
  0,
  78,
  78,
  110,
  110,
  2,
  0,
  68,
  68,
  100,
  100,
  2,
  0,
  79,
  79,
  111,
  111,
  2,
  0,
  82,
  82,
  114,
  114,
  2,
  0,
  84,
  84,
  116,
  116,
  3,
  0,
  10,
  10,
  13,
  13,
  34,
  34,
  6,
  0,
  9,
  10,
  13,
  13,
  32,
  33,
  38,
  38,
  40,
  41,
  124,
  124,
  3,
  0,
  9,
  10,
  13,
  13,
  32,
  32,
  74,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  3,
  1,
  0,
  0,
  0,
  0,
  5,
  1,
  0,
  0,
  0,
  0,
  7,
  1,
  0,
  0,
  0,
  0,
  9,
  1,
  0,
  0,
  0,
  0,
  11,
  1,
  0,
  0,
  0,
  0,
  13,
  1,
  0,
  0,
  0,
  0,
  15,
  1,
  0,
  0,
  0,
  1,
  17,
  1,
  0,
  0,
  0,
  3,
  19,
  1,
  0,
  0,
  0,
  5,
  27,
  1,
  0,
  0,
  0,
  7,
  34,
  1,
  0,
  0,
  0,
  9,
  40,
  1,
  0,
  0,
  0,
  11,
  55,
  1,
  0,
  0,
  0,
  13,
  57,
  1,
  0,
  0,
  0,
  15,
  60,
  1,
  0,
  0,
  0,
  17,
  18,
  5,
  40,
  0,
  0,
  18,
  2,
  1,
  0,
  0,
  0,
  19,
  20,
  5,
  41,
  0,
  0,
  20,
  4,
  1,
  0,
  0,
  0,
  21,
  22,
  7,
  0,
  0,
  0,
  22,
  23,
  7,
  1,
  0,
  0,
  23,
  28,
  7,
  2,
  0,
  0,
  24,
  25,
  5,
  38,
  0,
  0,
  25,
  28,
  5,
  38,
  0,
  0,
  26,
  28,
  5,
  38,
  0,
  0,
  27,
  21,
  1,
  0,
  0,
  0,
  27,
  24,
  1,
  0,
  0,
  0,
  27,
  26,
  1,
  0,
  0,
  0,
  28,
  6,
  1,
  0,
  0,
  0,
  29,
  30,
  7,
  3,
  0,
  0,
  30,
  35,
  7,
  4,
  0,
  0,
  31,
  32,
  5,
  124,
  0,
  0,
  32,
  35,
  5,
  124,
  0,
  0,
  33,
  35,
  5,
  124,
  0,
  0,
  34,
  29,
  1,
  0,
  0,
  0,
  34,
  31,
  1,
  0,
  0,
  0,
  34,
  33,
  1,
  0,
  0,
  0,
  35,
  8,
  1,
  0,
  0,
  0,
  36,
  37,
  7,
  1,
  0,
  0,
  37,
  38,
  7,
  3,
  0,
  0,
  38,
  41,
  7,
  5,
  0,
  0,
  39,
  41,
  5,
  33,
  0,
  0,
  40,
  36,
  1,
  0,
  0,
  0,
  40,
  39,
  1,
  0,
  0,
  0,
  41,
  10,
  1,
  0,
  0,
  0,
  42,
  46,
  5,
  34,
  0,
  0,
  43,
  45,
  8,
  6,
  0,
  0,
  44,
  43,
  1,
  0,
  0,
  0,
  45,
  48,
  1,
  0,
  0,
  0,
  46,
  44,
  1,
  0,
  0,
  0,
  46,
  47,
  1,
  0,
  0,
  0,
  47,
  49,
  1,
  0,
  0,
  0,
  48,
  46,
  1,
  0,
  0,
  0,
  49,
  56,
  5,
  34,
  0,
  0,
  50,
  52,
  8,
  7,
  0,
  0,
  51,
  50,
  1,
  0,
  0,
  0,
  52,
  53,
  1,
  0,
  0,
  0,
  53,
  51,
  1,
  0,
  0,
  0,
  53,
  54,
  1,
  0,
  0,
  0,
  54,
  56,
  1,
  0,
  0,
  0,
  55,
  42,
  1,
  0,
  0,
  0,
  55,
  51,
  1,
  0,
  0,
  0,
  56,
  12,
  1,
  0,
  0,
  0,
  57,
  58,
  1,
  0,
  0,
  0,
  58,
  14,
  1,
  0,
  0,
  0,
  59,
  61,
  7,
  8,
  0,
  0,
  60,
  59,
  1,
  0,
  0,
  0,
  61,
  62,
  1,
  0,
  0,
  0,
  62,
  60,
  1,
  0,
  0,
  0,
  62,
  63,
  1,
  0,
  0,
  0,
  63,
  64,
  1,
  0,
  0,
  0,
  64,
  65,
  6,
  7,
  0,
  0,
  65,
  16,
  1,
  0,
  0,
  0,
  8,
  0,
  27,
  34,
  40,
  46,
  53,
  55,
  62,
  1,
  6,
  0,
  0
], _.DecisionsToDFA = _._ATN.decisionToState.map((t, e) => new Ge(t, e));
let Bt = _;
const T = class T extends Fn {
  get grammarFileName() {
    return "BooleanExpr.g4";
  }
  get literalNames() {
    return T.literalNames;
  }
  get symbolicNames() {
    return T.symbolicNames;
  }
  get ruleNames() {
    return T.ruleNames;
  }
  get serializedATN() {
    return T._serializedATN;
  }
  createFailedPredicateException(t, e) {
    return new Ln(this, t, e);
  }
  constructor(t) {
    super(t), this._interp = new Dn(this, T._ATN, T.DecisionsToDFA, new $e());
  }
  // @RuleVersion(0)
  expr(t) {
    t === void 0 && (t = 0);
    let e = this._ctx, n = this.state, s = new L(this, this._ctx, n), i = s, r = 0;
    this.enterRecursionRule(s, 0, T.RULE_expr, t);
    try {
      let a;
      this.enterOuterAlt(s, 1);
      {
        switch (this.state = 11, this._errHandler.sync(this), this._input.LA(1)) {
          case 5:
            s = new Hn(this, s), this._ctx = s, i = s, this.state = 3, this.match(T.NOT), this.state = 4, this.expr(7);
            break;
          case 1:
            s = new Bn(this, s), this._ctx = s, i = s, this.state = 5, this.match(T.T__0), this.state = 6, this.expr(0), this.state = 7, this.match(T.T__1);
            break;
          case 7:
            s = new qn(this, s), this._ctx = s, i = s, this.state = 9, this.match(T.EMPTY);
            break;
          case 6:
            s = new Vn(this, s), this._ctx = s, i = s, this.state = 10, this.match(T.STRING);
            break;
          default:
            throw new Rn(this);
        }
        for (this._ctx.stop = this._input.LT(-1), this.state = 23, this._errHandler.sync(this), a = this._interp.adaptivePredict(this._input, 2, this._ctx); a !== 2 && a !== yn.INVALID_ALT_NUMBER;) {
          if (a === 1)
            switch (this._parseListeners != null && this.triggerExitRuleEvent(), i = s, this.state = 21, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 1, this._ctx)) {
              case 1:
                {
                  if (s = new Un(this, new L(this, e, n)), this.pushNewRecursionContext(s, r, T.RULE_expr), this.state = 13, !this.precpred(this._ctx, 6))
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                  this.state = 14, this.match(T.AND), this.state = 15, this.expr(7);
                }
                break;
              case 2:
                {
                  if (s = new zn(this, new L(this, e, n)), this.pushNewRecursionContext(s, r, T.RULE_expr), this.state = 16, !this.precpred(this._ctx, 5))
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                  this.state = 17, this.expr(6);
                }
                break;
              case 3:
                {
                  if (s = new Yn(this, new L(this, e, n)), this.pushNewRecursionContext(s, r, T.RULE_expr), this.state = 18, !this.precpred(this._ctx, 4))
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                  this.state = 19, this.match(T.OR), this.state = 20, this.expr(5);
                }
                break;
            }
          this.state = 25, this._errHandler.sync(this), a = this._interp.adaptivePredict(this._input, 2, this._ctx);
        }
      }
    } catch (a) {
      if (a instanceof Mn)
        s.exception = a, this._errHandler.reportError(this, a), this._errHandler.recover(this, a);
      else
        throw a;
    } finally {
      this.unrollRecursionContexts(e);
    }
    return s;
  }
  sempred(t, e, n) {
    switch (e) {
      case 0:
        return this.expr_sempred(t, n);
    }
    return !0;
  }
  expr_sempred(t, e) {
    switch (e) {
      case 0:
        return this.precpred(this._ctx, 6);
      case 1:
        return this.precpred(this._ctx, 5);
      case 2:
        return this.precpred(this._ctx, 4);
    }
    return !0;
  }
  static get _ATN() {
    return T.__ATN || (T.__ATN = new Ke().deserialize(T._serializedATN)), T.__ATN;
  }
};
T.T__0 = 1, T.T__1 = 2, T.AND = 3, T.OR = 4, T.NOT = 5, T.STRING = 6, T.EMPTY = 7, T.WS = 8, T.EOF = We.EOF, T.RULE_expr = 0, T.literalNames = [
  null,
  "'('",
  "')'"
], T.symbolicNames = [
  null,
  null,
  null,
  "AND",
  "OR",
  "NOT",
  "STRING",
  "EMPTY",
  "WS"
], T.ruleNames = [
  "expr"
], T._serializedATN = [
  4,
  1,
  8,
  27,
  2,
  0,
  7,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  3,
  0,
  12,
  8,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  5,
  0,
  22,
  8,
  0,
  10,
  0,
  12,
  0,
  25,
  9,
  0,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  31,
  0,
  11,
  1,
  0,
  0,
  0,
  2,
  3,
  6,
  0,
  -1,
  0,
  3,
  4,
  5,
  5,
  0,
  0,
  4,
  12,
  3,
  0,
  0,
  7,
  5,
  6,
  5,
  1,
  0,
  0,
  6,
  7,
  3,
  0,
  0,
  0,
  7,
  8,
  5,
  2,
  0,
  0,
  8,
  12,
  1,
  0,
  0,
  0,
  9,
  12,
  5,
  7,
  0,
  0,
  10,
  12,
  5,
  6,
  0,
  0,
  11,
  2,
  1,
  0,
  0,
  0,
  11,
  5,
  1,
  0,
  0,
  0,
  11,
  9,
  1,
  0,
  0,
  0,
  11,
  10,
  1,
  0,
  0,
  0,
  12,
  23,
  1,
  0,
  0,
  0,
  13,
  14,
  10,
  6,
  0,
  0,
  14,
  15,
  5,
  3,
  0,
  0,
  15,
  22,
  3,
  0,
  0,
  7,
  16,
  17,
  10,
  5,
  0,
  0,
  17,
  22,
  3,
  0,
  0,
  6,
  18,
  19,
  10,
  4,
  0,
  0,
  19,
  20,
  5,
  4,
  0,
  0,
  20,
  22,
  3,
  0,
  0,
  5,
  21,
  13,
  1,
  0,
  0,
  0,
  21,
  16,
  1,
  0,
  0,
  0,
  21,
  18,
  1,
  0,
  0,
  0,
  22,
  25,
  1,
  0,
  0,
  0,
  23,
  21,
  1,
  0,
  0,
  0,
  23,
  24,
  1,
  0,
  0,
  0,
  24,
  1,
  1,
  0,
  0,
  0,
  25,
  23,
  1,
  0,
  0,
  0,
  3,
  11,
  21,
  23
], T.DecisionsToDFA = T._ATN.decisionToState.map((t, e) => new Ge(t, e));
let j = T;
class L extends Pn {
  constructor(t, e, n) {
    super(e, n), this.parser = t;
  }
  get ruleIndex() {
    return j.RULE_expr;
  }
  copyFrom(t) {
    super.copyFrom(t);
  }
}
class Un extends L {
  constructor(t, e) {
    super(t, e.parentCtx, e.invokingState), super.copyFrom(e);
  }
  expr_list() {
    return this.getTypedRuleContexts(L);
  }
  expr(t) {
    return this.getTypedRuleContext(L, t);
  }
  AND() {
    return this.getToken(j.AND, 0);
  }
  // @Override
  accept(t) {
    return t.visitAndExpr ? t.visitAndExpr(this) : t.visitChildren(this);
  }
}
class Vn extends L {
  constructor(t, e) {
    super(t, e.parentCtx, e.invokingState), super.copyFrom(e);
  }
  STRING() {
    return this.getToken(j.STRING, 0);
  }
  // @Override
  accept(t) {
    return t.visitStringExpr ? t.visitStringExpr(this) : t.visitChildren(this);
  }
}
class zn extends L {
  constructor(t, e) {
    super(t, e.parentCtx, e.invokingState), super.copyFrom(e);
  }
  expr_list() {
    return this.getTypedRuleContexts(L);
  }
  expr(t) {
    return this.getTypedRuleContext(L, t);
  }
  // @Override
  accept(t) {
    return t.visitImplicitAndExpr ? t.visitImplicitAndExpr(this) : t.visitChildren(this);
  }
}
class qn extends L {
  constructor(t, e) {
    super(t, e.parentCtx, e.invokingState), super.copyFrom(e);
  }
  EMPTY() {
    return this.getToken(j.EMPTY, 0);
  }
  // @Override
  accept(t) {
    return t.visitEmptyExpr ? t.visitEmptyExpr(this) : t.visitChildren(this);
  }
}
class Hn extends L {
  constructor(t, e) {
    super(t, e.parentCtx, e.invokingState), super.copyFrom(e);
  }
  NOT() {
    return this.getToken(j.NOT, 0);
  }
  expr() {
    return this.getTypedRuleContext(L, 0);
  }
  // @Override
  accept(t) {
    return t.visitNotExpr ? t.visitNotExpr(this) : t.visitChildren(this);
  }
}
class Bn extends L {
  constructor(t, e) {
    super(t, e.parentCtx, e.invokingState), super.copyFrom(e);
  }
  expr() {
    return this.getTypedRuleContext(L, 0);
  }
  // @Override
  accept(t) {
    return t.visitParenExpr ? t.visitParenExpr(this) : t.visitChildren(this);
  }
}
class Yn extends L {
  constructor(t, e) {
    super(t, e.parentCtx, e.invokingState), super.copyFrom(e);
  }
  expr_list() {
    return this.getTypedRuleContexts(L);
  }
  expr(t) {
    return this.getTypedRuleContext(L, t);
  }
  OR() {
    return this.getToken(j.OR, 0);
  }
  // @Override
  accept(t) {
    return t.visitOrExpr ? t.visitOrExpr(this) : t.visitChildren(this);
  }
}
class je extends bn {
}
function Kn(o, t, e) {
  let n;
  return e ? n = t.includes(o) : n = t.toLowerCase().includes(o.toLowerCase()), n;
}
class Gn extends je {
  constructor(t, e) {
    super(), this.stringValues = [], this.visitAndExpr = (n) => {
      const s = this.visit(n.expr(0));
      if (!s)
        return !1;
      const i = this.visit(n.expr(1));
      return s && i;
    }, this.visitOrExpr = (n) => {
      const s = this.visit(n.expr(0));
      if (s) return !0;
      const i = this.visit(n.expr(1));
      return s || i;
    }, this.visitImplicitAndExpr = (n) => {
      const s = this.visit(n.expr(0));
      if (!s) return !1;
      const i = this.visit(n.expr(1));
      return s && i;
    }, this.visitParenExpr = (n) => this.visit(n.expr()), this.visitNotExpr = (n) => !this.visit(n.expr()), this.visitStringExpr = (n) => {
      const s = n.STRING().getText(), i = s.startsWith('"') && s.endsWith('"') ? s.slice(1, -1) : s;
      return this.stringValues.push(i), Kn(i, this.textToMatch, this.caseSensitive);
    }, this.visitEmptyExpr = (n) => !0, this.textToMatch = t, this.caseSensitive = e;
  }
  defaultResult() {
    return !1;
  }
  getStringValues() {
    return this.stringValues;
  }
}
class $n extends je {
  constructor() {
    super(...arguments), this.stringValues = [], this.visitStringExpr = (t) => {
      const e = t.STRING().getText(), n = e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1) : e;
      return this.stringValues.push(n), !1;
    };
  }
  defaultResult() {
    return !1;
  }
  getStringValues() {
    return this.stringValues;
  }
}
class le {
  /**
   * Creates an instance of BooleanExpression.
   * @param booleanExpression - The boolean expression as a string.
   * @param caseSensitive - Whether the expression is case sensitive.
   */
  constructor(t, e = !1) {
    if (this.caseSensitive = e, this.lexer = new Bt(new In(t)), this.tokenStream = new On(this.lexer), this.parser = new j(this.tokenStream), this.tree = this.parser.expr(), this.parser.syntaxErrorsCount > 0)
      throw new SyntaxError("invalid boolean expression");
    this.wordsUsedInMatch = [];
  }
  /**
   * Logs tokens for debugging grammar.
   */
  logTokens() {
    const t = this.lexer.symbolicNames;
    this.tokenStream.fill(), this.tokenStream.tokens.forEach((e) => {
      const n = t[e.type] || e.type;
      console.log(`Type: ${e.type}, Name: ${n}, Text: '${e.text}'`);
    });
  }
  /**
   * Gets words used in the boolean search expression.
   * @returns An array of words used in the expression.
   */
  getWords() {
    const t = new $n();
    return t.visit(this.tree), t.getStringValues();
  }
  /**
   * Checks whether the given text matches the boolean expression.
   * @param text - The text to match against the boolean expression.
   * @param caseSensitive - Whether the match should be case sensitive.
   * @returns True if the text matches the expression, false otherwise.
   */
  match(t, e = null) {
    const n = e !== null ? e : this.caseSensitive, s = new Gn(t, n);
    let i = s.visit(this.tree);
    return i ? this.wordsUsedInMatch = s.getStringValues() : this.wordsUsedInMatch = [], i;
  }
  /**
   * Gets words visited in the evaluation of the boolean search expression to come to a positive match.
   * @returns An array of words used in the last match.
   */
  getWordsUsedInLastMatch() {
    return this.wordsUsedInMatch;
  }
  /**
   * Directly matches a boolean expression given as a string with a given text string.
   * This is convenient for a single match for the expression. For multiple matches, 
   * it is better to create a BooleanExpression object.
   * @param booleanExpression - The boolean expression as a string.
   * @param text - The text to match against the boolean expression.
   * @param caseSensitive - Whether the match should be case sensitive.
   * @returns True if the text matches the expression, false otherwise.
   */
  static match(t, e, n = null) {
    const s = n !== null ? n : !1;
    return new le(t).match(e, s);
  }
}
function Wn(o, t, e = !1) {
  if (t == "")
    return;
  let n = "gi";
  e && (n = "g");
  const s = new RegExp(`(${t})`, n), i = document.createTreeWalker(o, NodeFilter.SHOW_TEXT, null);
  let r;
  for (r = i.nextNode(); r;) {
    let a = i.nextNode();
    const l = r.parentNode;
    if (r.nodeValue && s.test(r.nodeValue)) {
      const h = r.nodeValue.replace(s, "<mark>$1</mark>"), c = document.createElement("div");
      for (c.innerHTML = h; c.firstChild;)
        l.insertBefore(c.firstChild, r);
      l.removeChild(r);
    }
    r = a;
  }
}
function jn(o) {
  o.querySelectorAll("mark").forEach((t) => {
    const e = t.parentNode;
    for (; t.firstChild;)
      e.insertBefore(t.firstChild, t);
    e.removeChild(t), e.normalize();
  });
}
class Zn {
  constructor() {
    Q(this, "htmlPageSpecificFilterAndMarkCallback", null);
    Q(this, "elementsCssSelectorForItems", "li");
    Q(this, "elementsCssSelectorForSectionItems", null);
    Q(this, "highlightingActive", !0);
    Q(this, "caseSensitive", !1);
    Q(this, "id", "BooleanSearch");
  }
  /**
   * Sets the auto-generated search form in the HTML element with the specified ID.
   * @returns {this} The current instance of BooleanSearch.
   */
  setAutoForm(t) {
    t === void 0 && (t = '<small> <b> &nbsp;&nbsp;&nbsp; <a href="https://www.npmjs.com/package/boolean-search-filter"> boolean search supported</a>: </b> eg. (John OR "Jane Smith") AND NOT journal </small>');
    const e = `       
        <form id="${this.id}_searchForm">
            <input id="${this.id}_searchbox" type="text" placeholder="Type boolean search expression here..." aria-label="Type boolean search expression here..." style="width: 500px; padding: 5px; border: 1px solid #ccc; border-radius: 4px; " />
            <button id="${this.id}_button" type="button" aria-label="Do Search">
            Search
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>
            Case Sensitive <input type="checkbox" id="${this.id}_checkbox" > 
            </label>
            <br>
            ${t}
        </form>
        <div id="${this.id}_error" style="color: red; font-weight: bold"></div>
        <div id="${this.id}_answer"></div>
        `;
    return document.getElementById(this.id).innerHTML = e, this;
  }
  /*
      <input size="40"  id="wordInput" placeholder="Type words here..."></input>
      <button id="button" onclick="highlightWords()">Search</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label>
        Case Sensitive <input type="checkbox" id="caseSensitiveCheckbox" onclick="toggleCaseSensitive()"> 
      </label>
  
  */
  /**
   * Sets a custom search form in the HTML element with the specified ID.
   * @param {string} formString - The HTML string for the custom search form.
   * @returns {this} The current instance of BooleanSearch.
   */
  setForm(t) {
    return document.getElementById(this.id).innerHTML = t, this;
  }
  /**
   * Sets the ID of the HTML element where the search form will be inserted.
   * @param {string} id - The ID of the HTML element.
   * @returns {this} The current instance of BooleanSearch.
   */
  setId(t) {
    return this.id = t, this;
  }
  /**
   * Sets the CSS selector for the elements to be searched.
   * @param {string} elementsCssSelector - The CSS selector for the elements.
   * @returns {this} The current instance of BooleanSearch.
   */
  setElementsCssSelector(t) {
    return this.elementsCssSelectorForItems = t, this;
  }
  /**
   * Sets the CSS selector for the section elements to be searched.
   * 
   * If this method is called then we have multiple lists, one per section, where 
   * sections are selected by the `sectionElementsCssSelector`, and elements within 
   * the section with the `elementsCssSelector`. When this method is not called the 
   * library only uses the `elementsCssSelector` for a single list of elements 
   * without any sections.
   * 
   * @param {string} elementsCssSelector - The CSS selector for the section elements.
   * @returns {this} The current instance of BooleanSearch.
   */
  setSectionElementsCssSelector(t) {
    return this.elementsCssSelectorForSectionItems = t, this;
  }
  /**
   * Sets a callback function for filtering and marking elements on the HTML page.
   * @param {(fn: BooleanSearch.filterAndMarkElementsFunc) => boolean} callback - The callback function.
   * @returns {this} The current instance of BooleanSearch.
   */
  setHtmlPageSpecificFilterAndMarkCallback(t) {
    return this.htmlPageSpecificFilterAndMarkCallback = t, this;
  }
  /**
   * Enables or disables highlighting of matched elements.
   * @param {boolean} active - Whether highlighting should be active.
   * @returns {this} The current instance of BooleanSearch.
   */
  setHighlighting(t) {
    return this.highlightingActive = t, this;
  }
  toggleCaseSensitive() {
    console.log("toggleCaseSensitive"), this.caseSensitive = !this.caseSensitive;
  }
  /**
   * Applies the search functionality to the HTML page.
   */
  apply() {
    this.htmlPageSpecificFilterAndMarkCallback === null && (this.elementsCssSelectorForSectionItems === null ? this.htmlPageSpecificFilterAndMarkCallback = this.elementsPageFilterAndMarkCallback : this.htmlPageSpecificFilterAndMarkCallback = this.sectionedElementsPageFilterAndMarkCallback);
    let t = this;
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.getElementById(`${t.id}_button`), n = document.getElementById(`${t.id}_searchbox`), s = document.getElementById(`${t.id}_checkbox`), i = document.getElementById(`${t.id}_searchForm`), r = document.getElementById(`${t.id}_answer`), a = document.getElementById(`${t.id}_error`);
      e && e.addEventListener("click", function () {
        if (n) {
          const l = n.value;
          try {
            r.textContent = "", a.textContent = "", t.searchFilter(l) || (r.textContent = "No matches");
          } catch {
            a.textContent = "Error in boolean search term", t.searchFilter("fsdjfkjaskfjksdjfksdjflksdjlka");
          }
        }
      }), n && e && n.addEventListener("keyup", function (l) {
        l.key === "Enter" && (l.preventDefault(), e.click(), n.blur(), n.focus());
      }), s && e && s.addEventListener("click", function () {
        t.toggleCaseSensitive(), e.click();
      }), i && i.addEventListener("submit", function (l) {
        l.preventDefault();
      });
    });
  }
  /**
   * Filters and marks elements based on the provided boolean expression.
   * @param {string} booleanExpr - The boolean expression to filter elements.
   * @returns {boolean} Whether any elements matched the boolean expression.
   */
  searchFilter(t) {
    const e = new le(t);
    let n = (i) => this.filterAndMarkElementsMatchingBooleanExpression(i, e);
    return this.htmlPageSpecificFilterAndMarkCallback(n);
  }
  /**
   * Filters and marks elements on the page based on the provided callback function.
   * @param {BooleanSearch.filterAndMarkElementsFunc} filterAndMarkElements - The callback function to filter and mark elements.
   * @returns {boolean} Whether any elements matched the boolean expression.
   */
  elementsPageFilterAndMarkCallback(t) {
    const e = document.querySelectorAll(this.elementsCssSelectorForItems);
    return t(e);
  }
  /**
   * Filters and marks sectioned elements on the page based on the provided callback function.
   * @param {BooleanSearch.filterAndMarkElementsFunc} filterAndMarkElements - The callback function to filter and mark elements.
   * @returns {boolean} Whether any elements matched the boolean expression.
   */
  sectionedElementsPageFilterAndMarkCallback(t) {
    let e = !1;
    return document.querySelectorAll(this.elementsCssSelectorForSectionItems).forEach((s, i) => {
      let r = !1, a = s.tagName, l = s.nextElementSibling;
      for (; l && l.tagName !== a;) {
        const h = l.querySelectorAll(this.elementsCssSelectorForItems);
        t(h) && (r = !0), l = l.nextElementSibling;
      }
      r ? (s.style.display = "", e = !0) : s.style.display = "none";
    }), e;
  }
  /**
   * Filters and marks elements that match the provided boolean expression.
   * @param {NodeListOf<HTMLElement>} elements - The elements to filter and mark.
   * @param {BooleanExpression} booleanExpr - The boolean expression to match elements against.
   * @returns {boolean} Whether any elements matched the boolean expression.
   */
  filterAndMarkElementsMatchingBooleanExpression(t, e) {
    let n = e.getWords(), s = !1;
    return t.forEach((i, r) => {
      let a = !1;
      if (i.textContent && (a = e.match(i.textContent, this.caseSensitive)), a ? (s = !0, i.style.display = "") : i.style.display = "none", this.highlightingActive && a && n) {
        jn(i);
        for (const l of n)
          Wn(i, l, this.caseSensitive);
      }
    }), s;
  }
}
export {
  Zn as BooleanSearch
};
//# sourceMappingURL=BooleanSearch.bundled.es.js.map
