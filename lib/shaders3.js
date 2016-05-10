var fs = require('fs');

exports.simpleVert =
  fs.readFileSync(__dirname + '/shaders/simple.vert', 'utf-8');

exports.simpleFrag =
  fs.readFileSync(__dirname + '/shaders/simple.vert', 'utf-8');

exports.facingVert =
  fs.readFileSync(__dirname + '/shaders/facing.vert', 'utf-8');

exports.facingFrag2 =
  fs.readFileSync(__dirname + '/shaders/facing2.frag', 'utf-8');

exports.facingFrag3 =
  fs.readFileSync(__dirname + '/shaders/facing3.frag', 'utf-8');

exports.facingVertTunnel =
  fs.readFileSync(__dirname + '/shaders/facingTunnel.vert', 'utf-8');

exports.facingFragtunnel =
  fs.readFileSync(__dirname + '/shaders/facingTunnel.frag', 'utf-8');
