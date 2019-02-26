#ifndef VEC2_H
#define VEC2_H

class vec2 {

  public:
    float x, y;
	vec2();
	vec2(float x0, float y0);
	float mag();
	vec2 div(vec2 n);
	vec2 mul(vec2 n);
	vec2 add(vec2);
	static vec2 lerp(vec2 v0, vec2 v1, float t);
};

#endif
