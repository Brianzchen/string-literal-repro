// @flow
import type {
  ImportedModule,
  ImportedModuleExact,
  ImportedModuleInexact,
  ImportedModuleNestedExact,
} from './import';

type ObjFunction = (a: 'a' | 'b') => string

type InModule = {
  func: ObjFunction,
}

declare var obj1: InModule
declare var obj2: ImportedModule
declare var obj3: ImportedModuleExact
declare var obj4: ImportedModuleInexact
declare var obj5: ImportedModuleNestedExact

obj1.func('a')
obj2.func('a')
obj3.func('a') // This one doesn't have dropdown
obj4.func('a')
obj5.func('a') // This one doesn't have dropdown
