
interface PINGroupOperationReference extends NSObjectProtocol {
}
declare var PINGroupOperationReference: {

	prototype: PINGroupOperationReference;
};

declare class PINOperationGroup extends NSObject {

	static alloc(): PINOperationGroup; // inherited from NSObject

	static asyncOperationGroupWithQueue(operationQueue: PINOperationQueue): PINOperationGroup;

	static new(): PINOperationGroup; // inherited from NSObject

	addOperation(operation: () => void): PINGroupOperationReference;

	addOperationWithPriority(operation: () => void, priority: PINOperationQueuePriority): PINGroupOperationReference;

	cancel(): void;

	setCompletion(completion: () => void): void;

	start(): void;

	waitUntilComplete(): void;
}

declare class PINOperationQueue extends NSObject {

	static alloc(): PINOperationQueue; // inherited from NSObject

	static new(): PINOperationQueue; // inherited from NSObject

	static sharedOperationQueue(): PINOperationQueue;

	maxConcurrentOperations: number;

	constructor(o: { maxConcurrentOperations: number; });

	constructor(o: { maxConcurrentOperations: number; concurrentQueue: NSObject; });

	addOperation(operation: () => void): PINOperationReference;

	addOperationWithPriority(operation: () => void, priority: PINOperationQueuePriority): PINOperationReference;

	addOperationWithPriorityIdentifierCoalescingDataDataCoalescingBlockCompletion(operation: (p1: any) => void, priority: PINOperationQueuePriority, identifier: string, coalescingData: any, dataCoalescingBlock: (p1: any, p2: any) => any, completion: () => void): PINOperationReference;

	cancelAllOperations(): void;

	cancelOperation(operationReference: PINOperationReference): boolean;

	initWithMaxConcurrentOperations(maxConcurrentOperations: number): this;

	initWithMaxConcurrentOperationsConcurrentQueue(maxConcurrentOperations: number, concurrentQueue: NSObject): this;

	scheduleOperation(operation: () => void): PINOperationReference;

	scheduleOperationWithPriority(operation: () => void, priority: PINOperationQueuePriority): PINOperationReference;

	scheduleOperationWithPriorityIdentifierCoalescingDataDataCoalescingBlockCompletion(operation: (p1: any) => void, priority: PINOperationQueuePriority, identifier: string, coalescingData: any, dataCoalescingBlock: (p1: any, p2: any) => any, completion: () => void): PINOperationReference;

	setOperationPriorityWithReference(priority: PINOperationQueuePriority, reference: PINOperationReference): void;

	waitUntilAllOperationsAreFinished(): void;
}

declare const enum PINOperationQueuePriority {

	Low = 0,

	Default = 1,

	High = 2
}

interface PINOperationReference extends NSObjectProtocol {
}
declare var PINOperationReference: {

	prototype: PINOperationReference;
};

declare var PINOperationVersionNumber: number;

declare var PINOperationVersionString: interop.Reference<number>;
