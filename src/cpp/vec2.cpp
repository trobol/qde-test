#include <emscripten/bind.h>
#include "vec2.h"
vec2::vec2() {};
vec2::vec2(float x0, float y0)
{
	x = x0;
	y = y0;
}
vec2 vec2::add(vec2 n) {
	vec2 t;
	t.x = x + n.x;
	t.y = y + n.y;
	return t;
}
vec2 vec2::mul(vec2 n) {
	vec2 t;
	t.x = x * n.x;
	t.y = y * n.y;
	return t;
}
vec2 vec2::div(vec2 n) {
	vec2 t;
	t.x = x / n.x;
	t.y = y / n.y;
	return t;
}
// Binding code
using namespace emscripten;
EMSCRIPTEN_BINDINGS() {
class_<vec2>("vec2")
	.function("add", &vec2::add)
	.function("mul", &vec2::mul)
	.function("div", &vec2::div);
}