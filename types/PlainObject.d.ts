import type { Primitive } from './Primitive';

export type PlainObject<T extends Record<string, any>> = T extends Record<infer K, infer V>
    ? (
        V extends Record<any, any>
            ? Record<K, PlainObject<V>>
            : (V extends Primitive ? Record<K, V> : never))
    : never;
