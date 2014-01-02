var OpaqueBitfield = module.exports = function OpaqueBitfield(backing) {
  if (typeof backing === "number") {
    backing = Buffer(backing);
    backing.fill(0);
  } else if (Buffer.isBuffer(backing)) {
    backing = Buffer(backing);
  } else if (Array.isArray(backing)) {
    backing = Buffer(backing);
  } else {
    backing = Buffer(0);
  }

  this.backing = backing;
};

OpaqueBitfield.prototype.get = function get(n) {
  var a = n >> 3;
  var b = n % 8;
  var c = 1 << b;

  if (a > this.backing.length) {
    return false;
  }

  return !!(this.backing[a] & c);
};

OpaqueBitfield.prototype.set = function set(n, v) {
  var a = n >> 3;
  var b = -((n%8)-7);
  var c = 1 << b;

  if (a >= this.backing.length) {
    var more = Buffer((a - this.backing.length) + 1);
    more.fill(0);

    this.backing = Buffer.concat([
      this.backing,
      more,
    ]);
  }

  if (v) {
    this.backing[a] = this.backing[a] | c;
  } else {
    this.backing[a] = this.backing[a] & (255 ^ c);
  }

  return this;
};

OpaqueBitfield.prototype.toBuffer = function toBuffer(options) {
  return Buffer(this.backing);
};
