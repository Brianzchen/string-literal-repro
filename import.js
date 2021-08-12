// @flow
type ObjFunction = (a: 'a' | 'b') => string

export type ImportedModule = {
  func: ObjFunction,
}

export type ImportedModuleExact = {|
  func: ObjFunction,
|}

export type ImportedModuleInexact = {
  func: ObjFunction,
  ...
}

export type ImportedModuleNestedExact = {
  func: ObjFunction,
  nested: {|
    a: string,
  |},
  ...
}

