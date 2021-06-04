
declare class PINCache extends NSObject implements PINCacheObjectSubscripting, PINCaching {

	static alloc(): PINCache; // inherited from NSObject

	static new(): PINCache; // inherited from NSObject

	readonly diskByteCount: number;

	readonly diskCache: PINDiskCache;

	readonly memoryCache: PINMemoryCache;

	static readonly sharedCache: PINCache;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from PINCaching

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; });

	constructor(o: { name: string; rootPath: string; });

	constructor(o: { name: string; rootPath: string; serializer: (p1: NSCoding, p2: string) => NSData; deserializer: (p1: NSData, p2: string) => NSCoding; });

	constructor(o: { name: string; rootPath: string; serializer: (p1: NSCoding, p2: string) => NSData; deserializer: (p1: NSData, p2: string) => NSCoding; keyEncoder: (p1: string) => string; keyDecoder: (p1: string) => string; });

	constructor(o: { name: string; rootPath: string; serializer: (p1: NSCoding, p2: string) => NSData; deserializer: (p1: NSData, p2: string) => NSCoding; keyEncoder: (p1: string) => string; keyDecoder: (p1: string) => string; ttlCache: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsObjectForKey(key: string): boolean;

	containsObjectForKeyAsyncCompletion(key: string, block: (p1: boolean) => void): void;

	containsObjectForKeyBlock(key: string, block: (p1: boolean) => void): void;

	initWithName(name: string): this;

	initWithNameRootPath(name: string, rootPath: string): this;

	initWithNameRootPathSerializerDeserializer(name: string, rootPath: string, serializer: (p1: NSCoding, p2: string) => NSData, deserializer: (p1: NSData, p2: string) => NSCoding): this;

	initWithNameRootPathSerializerDeserializerKeyEncoderKeyDecoder(name: string, rootPath: string, serializer: (p1: NSCoding, p2: string) => NSData, deserializer: (p1: NSData, p2: string) => NSCoding, keyEncoder: (p1: string) => string, keyDecoder: (p1: string) => string): this;

	initWithNameRootPathSerializerDeserializerKeyEncoderKeyDecoderTtlCache(name: string, rootPath: string, serializer: (p1: NSCoding, p2: string) => NSData, deserializer: (p1: NSData, p2: string) => NSCoding, keyEncoder: (p1: string) => string, keyDecoder: (p1: string) => string, ttlCache: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKey(key: string): any;

	objectForKeyAsyncCompletion(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	objectForKeyBlock(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	objectForKeyedSubscript(key: string): any;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllObjects(block: (p1: PINCaching) => void): void;

	removeAllObjectsAsync(block: (p1: PINCaching) => void): void;

	removeExpiredObjects(): void;

	removeExpiredObjectsAsync(block: (p1: PINCaching) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyAsyncCompletion(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	removeObjectForKeyBlock(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectAsyncForKeyCompletion(object: any, key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithAgeLimitCompletion(object: any, key: string, ageLimit: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithCostAgeLimitCompletion(object: any, key: string, cost: number, ageLimit: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithCostCompletion(object: any, key: string, cost: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectForKey(object: any, key: string): void;

	setObjectForKeyBlock(object: NSCoding, key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectForKeyWithAgeLimit(object: any, key: string, ageLimit: number): void;

	setObjectForKeyWithCost(object: any, key: string, cost: number): void;

	setObjectForKeyWithCostAgeLimit(object: any, key: string, cost: number, ageLimit: number): void;

	setObjectForKeyWithCostBlock(object: NSCoding, key: string, cost: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectForKeyedSubscript(object: any, key: string): void;

	trimToDate(date: Date): void;

	trimToDateAsyncCompletion(date: Date, block: (p1: PINCaching) => void): void;

	trimToDateBlock(date: Date, block: (p1: PINCaching) => void): void;
}

interface PINCacheObjectSubscripting extends NSObjectProtocol {

	objectForKeyedSubscript(key: string): any;

	setObjectForKeyedSubscript(object: any, key: string): void;
}
declare var PINCacheObjectSubscripting: {

	prototype: PINCacheObjectSubscripting;
};

declare var PINCacheVersionNumber: number;

declare var PINCacheVersionString: interop.Reference<number>;

interface PINCaching extends NSObjectProtocol {

	name: string;

	containsObjectForKey(key: string): boolean;

	containsObjectForKeyAsyncCompletion(key: string, block: (p1: boolean) => void): void;

	objectForKey(key: string): any;

	objectForKeyAsyncCompletion(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	removeAllObjects(): void;

	removeAllObjectsAsync(block: (p1: PINCaching) => void): void;

	removeExpiredObjects(): void;

	removeExpiredObjectsAsync(block: (p1: PINCaching) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyAsyncCompletion(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyCompletion(object: any, key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithAgeLimitCompletion(object: any, key: string, ageLimit: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithCostAgeLimitCompletion(object: any, key: string, cost: number, ageLimit: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithCostCompletion(object: any, key: string, cost: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectForKey(object: any, key: string): void;

	setObjectForKeyWithAgeLimit(object: any, key: string, ageLimit: number): void;

	setObjectForKeyWithCost(object: any, key: string, cost: number): void;

	setObjectForKeyWithCostAgeLimit(object: any, key: string, cost: number, ageLimit: number): void;

	trimToDate(date: Date): void;

	trimToDateAsyncCompletion(date: Date, block: (p1: PINCaching) => void): void;
}
declare var PINCaching: {

	prototype: PINCaching;
};

declare class PINDiskCache extends NSObject implements PINCacheObjectSubscripting, PINCaching {

	static alloc(): PINDiskCache; // inherited from NSObject

	static cacheURLWithRootPathPrefixName(rootPath: string, prefix: string, name: string): NSURL;

	static emptyTrash(): void;

	static new(): PINDiskCache; // inherited from NSObject

	ageLimit: number;

	readonly byteCount: number;

	byteLimit: number;

	readonly cacheURL: NSURL;

	didAddObjectBlock: (p1: PINDiskCache, p2: string, p3: NSCoding) => void;

	didRemoveAllObjectsBlock: (p1: PINCaching) => void;

	didRemoveObjectBlock: (p1: PINDiskCache, p2: string, p3: NSCoding) => void;

	readonly prefix: string;

	readonly ttlCache: boolean;

	willAddObjectBlock: (p1: PINDiskCache, p2: string, p3: NSCoding) => void;

	willRemoveAllObjectsBlock: (p1: PINCaching) => void;

	willRemoveObjectBlock: (p1: PINDiskCache, p2: string, p3: NSCoding) => void;

	writingProtectionOption: NSDataWritingOptions;

	static readonly sharedCache: PINDiskCache;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from PINCaching

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; });

	constructor(o: { name: string; prefix: string; rootPath: string; serializer: (p1: NSCoding, p2: string) => NSData; deserializer: (p1: NSData, p2: string) => NSCoding; keyEncoder: (p1: string) => string; keyDecoder: (p1: string) => string; operationQueue: PINOperationQueue; });

	constructor(o: { name: string; prefix: string; rootPath: string; serializer: (p1: NSCoding, p2: string) => NSData; deserializer: (p1: NSData, p2: string) => NSCoding; keyEncoder: (p1: string) => string; keyDecoder: (p1: string) => string; operationQueue: PINOperationQueue; ttlCache: boolean; });

	constructor(o: { name: string; rootPath: string; });

	constructor(o: { name: string; rootPath: string; serializer: (p1: NSCoding, p2: string) => NSData; deserializer: (p1: NSData, p2: string) => NSCoding; });

	constructor(o: { name: string; rootPath: string; serializer: (p1: NSCoding, p2: string) => NSData; deserializer: (p1: NSData, p2: string) => NSCoding; operationQueue: PINOperationQueue; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsObjectForKey(key: string): boolean;

	containsObjectForKeyAsyncCompletion(key: string, block: (p1: boolean) => void): void;

	containsObjectForKeyBlock(key: string, block: (p1: boolean) => void): void;

	enumerateObjectsWithBlock(block: (p1: string, p2: NSURL, p3: interop.Pointer | interop.Reference<boolean>) => void): void;

	enumerateObjectsWithBlockAsyncCompletionBlock(block: (p1: string, p2: NSURL, p3: interop.Pointer | interop.Reference<boolean>) => void, completionBlock: (p1: PINCaching) => void): void;

	enumerateObjectsWithBlockCompletionBlock(block: (p1: string, p2: NSURL) => void, completionBlock: (p1: PINDiskCache) => void): void;

	fileURLForKey(key: string): NSURL;

	fileURLForKeyAsyncCompletion(key: string, block: (p1: string, p2: NSURL) => void): void;

	fileURLForKeyBlock(key: string, block: (p1: string, p2: NSURL) => void): void;

	initWithName(name: string): this;

	initWithNamePrefixRootPathSerializerDeserializerKeyEncoderKeyDecoderOperationQueue(name: string, prefix: string, rootPath: string, serializer: (p1: NSCoding, p2: string) => NSData, deserializer: (p1: NSData, p2: string) => NSCoding, keyEncoder: (p1: string) => string, keyDecoder: (p1: string) => string, operationQueue: PINOperationQueue): this;

	initWithNamePrefixRootPathSerializerDeserializerKeyEncoderKeyDecoderOperationQueueTtlCache(name: string, prefix: string, rootPath: string, serializer: (p1: NSCoding, p2: string) => NSData, deserializer: (p1: NSData, p2: string) => NSCoding, keyEncoder: (p1: string) => string, keyDecoder: (p1: string) => string, operationQueue: PINOperationQueue, ttlCache: boolean): this;

	initWithNameRootPath(name: string, rootPath: string): this;

	initWithNameRootPathSerializerDeserializer(name: string, rootPath: string, serializer: (p1: NSCoding, p2: string) => NSData, deserializer: (p1: NSData, p2: string) => NSCoding): this;

	initWithNameRootPathSerializerDeserializerOperationQueue(name: string, rootPath: string, serializer: (p1: NSCoding, p2: string) => NSData, deserializer: (p1: NSData, p2: string) => NSCoding, operationQueue: PINOperationQueue): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	lockFileAccessWhileExecutingBlock(block: (p1: PINCaching) => void): void;

	lockFileAccessWhileExecutingBlockAsync(block: (p1: PINCaching) => void): void;

	objectForKey(key: string): NSCoding;

	objectForKeyAsyncCompletion(key: string, block: (p1: PINDiskCache, p2: string, p3: NSCoding) => void): void;

	objectForKeyBlock(key: string, block: (p1: PINDiskCache, p2: string, p3: NSCoding) => void): void;

	objectForKeyedSubscript(key: string): any;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllObjects(block: (p1: PINDiskCache) => void): void;

	removeAllObjectsAsync(block: (p1: PINCaching) => void): void;

	removeExpiredObjects(): void;

	removeExpiredObjectsAsync(block: (p1: PINCaching) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyAsyncCompletion(key: string, block: (p1: PINDiskCache, p2: string, p3: NSCoding) => void): void;

	removeObjectForKeyBlock(key: string, block: (p1: PINDiskCache, p2: string, p3: NSCoding) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectAsyncForKeyCompletion(object: NSCoding, key: string, block: (p1: PINDiskCache, p2: string, p3: NSCoding) => void): void;

	setObjectAsyncForKeyWithAgeLimitCompletion(object: NSCoding, key: string, ageLimit: number, block: (p1: PINDiskCache, p2: string, p3: NSCoding) => void): void;

	setObjectAsyncForKeyWithCostAgeLimitCompletion(object: NSCoding, key: string, cost: number, ageLimit: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithCostCompletion(object: NSCoding, key: string, cost: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectForKey(object: NSCoding, key: string): void;

	setObjectForKeyBlock(object: NSCoding, key: string, block: (p1: PINDiskCache, p2: string, p3: NSCoding) => void): void;

	setObjectForKeyWithAgeLimit(object: NSCoding, key: string, ageLimit: number): void;

	setObjectForKeyWithCost(object: any, key: string, cost: number): void;

	setObjectForKeyWithCostAgeLimit(object: any, key: string, cost: number, ageLimit: number): void;

	setObjectForKeyedSubscript(object: any, key: string): void;

	setTtlCache(ttlCache: boolean): void;

	synchronouslyLockFileAccessWhileExecutingBlock(block: (p1: PINCaching) => void): void;

	trimToDate(date: Date): void;

	trimToDateAsyncCompletion(date: Date, block: (p1: PINCaching) => void): void;

	trimToDateBlock(date: Date, block: (p1: PINDiskCache) => void): void;

	trimToSize(byteCount: number): void;

	trimToSizeAsyncCompletion(byteCount: number, block: (p1: PINCaching) => void): void;

	trimToSizeBlock(byteCount: number, block: (p1: PINDiskCache) => void): void;

	trimToSizeByDate(byteCount: number): void;

	trimToSizeByDateAsyncCompletion(byteCount: number, block: (p1: PINCaching) => void): void;

	trimToSizeByDateBlock(byteCount: number, block: (p1: PINDiskCache) => void): void;
}

declare const enum PINDiskCacheError {

	ReadFailure = -1000,

	WriteFailure = -1001
}

declare var PINDiskCacheErrorDomain: string;

declare var PINDiskCacheErrorReadFailureCodeKey: string;

declare var PINDiskCacheErrorWriteFailureCodeKey: string;

declare var PINDiskCachePrefix: string;

declare class PINMemoryCache extends NSObject implements PINCacheObjectSubscripting, PINCaching {

	static alloc(): PINMemoryCache; // inherited from NSObject

	static new(): PINMemoryCache; // inherited from NSObject

	ageLimit: number;

	costLimit: number;

	didAddObjectBlock: (p1: PINCaching, p2: string, p3: any) => void;

	didEnterBackgroundBlock: (p1: PINCaching) => void;

	didReceiveMemoryWarningBlock: (p1: PINCaching) => void;

	didRemoveAllObjectsBlock: (p1: PINCaching) => void;

	didRemoveObjectBlock: (p1: PINCaching, p2: string, p3: any) => void;

	removeAllObjectsOnEnteringBackground: boolean;

	removeAllObjectsOnMemoryWarning: boolean;

	readonly totalCost: number;

	readonly ttlCache: boolean;

	willAddObjectBlock: (p1: PINCaching, p2: string, p3: any) => void;

	willRemoveAllObjectsBlock: (p1: PINCaching) => void;

	willRemoveObjectBlock: (p1: PINCaching, p2: string, p3: any) => void;

	static readonly sharedCache: PINMemoryCache;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from PINCaching

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; operationQueue: PINOperationQueue; });

	constructor(o: { name: string; operationQueue: PINOperationQueue; ttlCache: boolean; });

	constructor(o: { operationQueue: PINOperationQueue; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsObjectForKey(key: string): boolean;

	containsObjectForKeyAsyncCompletion(key: string, block: (p1: boolean) => void): void;

	containsObjectForKeyBlock(key: string, block: (p1: boolean) => void): void;

	enumerateObjectsWithBlock(block: (p1: PINCaching, p2: string, p3: any, p4: interop.Pointer | interop.Reference<boolean>) => void): void;

	enumerateObjectsWithBlockAsyncCompletionBlock(block: (p1: PINCaching, p2: string, p3: any, p4: interop.Pointer | interop.Reference<boolean>) => void, completionBlock: (p1: PINCaching) => void): void;

	enumerateObjectsWithBlockCompletionBlock(block: (p1: PINMemoryCache, p2: string, p3: any) => void, completionBlock: (p1: PINMemoryCache) => void): void;

	initWithNameOperationQueue(name: string, operationQueue: PINOperationQueue): this;

	initWithNameOperationQueueTtlCache(name: string, operationQueue: PINOperationQueue, ttlCache: boolean): this;

	initWithOperationQueue(operationQueue: PINOperationQueue): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKey(key: string): any;

	objectForKeyAsyncCompletion(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	objectForKeyBlock(key: string, block: (p1: PINMemoryCache, p2: string, p3: any) => void): void;

	objectForKeyedSubscript(key: string): any;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllObjects(block: (p1: PINMemoryCache) => void): void;

	removeAllObjectsAsync(block: (p1: PINCaching) => void): void;

	removeExpiredObjects(): void;

	removeExpiredObjectsAsync(block: (p1: PINCaching) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyAsyncCompletion(key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	removeObjectForKeyBlock(key: string, block: (p1: PINMemoryCache, p2: string, p3: any) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectAsyncForKeyCompletion(object: any, key: string, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithAgeLimitCompletion(object: any, key: string, ageLimit: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithCostAgeLimitCompletion(object: any, key: string, cost: number, ageLimit: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectAsyncForKeyWithCostCompletion(object: any, key: string, cost: number, block: (p1: PINCaching, p2: string, p3: any) => void): void;

	setObjectForKey(object: any, key: string): void;

	setObjectForKeyBlock(object: any, key: string, block: (p1: PINMemoryCache, p2: string, p3: any) => void): void;

	setObjectForKeyWithAgeLimit(object: any, key: string, ageLimit: number): void;

	setObjectForKeyWithCost(object: any, key: string, cost: number): void;

	setObjectForKeyWithCostAgeLimit(object: any, key: string, cost: number, ageLimit: number): void;

	setObjectForKeyWithCostBlock(object: any, key: string, cost: number, block: (p1: PINMemoryCache, p2: string, p3: any) => void): void;

	setObjectForKeyedSubscript(object: any, key: string): void;

	setTtlCache(ttlCache: boolean): void;

	trimToCost(cost: number): void;

	trimToCostAsyncCompletion(cost: number, block: (p1: PINCaching) => void): void;

	trimToCostBlock(cost: number, block: (p1: PINMemoryCache) => void): void;

	trimToCostByDate(cost: number): void;

	trimToCostByDateAsyncCompletion(cost: number, block: (p1: PINCaching) => void): void;

	trimToCostByDateBlock(cost: number, block: (p1: PINMemoryCache) => void): void;

	trimToDate(date: Date): void;

	trimToDateAsyncCompletion(date: Date, block: (p1: PINCaching) => void): void;

	trimToDateBlock(date: Date, block: (p1: PINMemoryCache) => void): void;
}
