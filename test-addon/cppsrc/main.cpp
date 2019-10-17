/* cppsrc/main.cpp */
#include <napi.h>
#include "Samples/functionexample.h"
#include <Windows.h>

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  SetCursorPos(400,400);
  return functionexample::Init(env, exports);
}

NODE_API_MODULE(testaddon, InitAll)