
declare const enum SCSDKCameraPosition {

	Unknown = 0,

	Front = 1,

	Back = 2
}

declare class SCSDKCameraViewState extends NSObject {

	static alloc(): SCSDKCameraViewState; // inherited from NSObject

	static new(): SCSDKCameraViewState; // inherited from NSObject

	cameraPosition: SCSDKCameraPosition;

	constructor(o: { cameraPosition: SCSDKCameraPosition; });

	initWithCameraPosition(cameraPosition: SCSDKCameraPosition): this;
}

declare class SCSDKContentTopics extends NSObject {

	static alloc(): SCSDKContentTopics; // inherited from NSObject

	static new(): SCSDKContentTopics; // inherited from NSObject

	readonly topics: NSArray<string>;

	constructor(o: { topics: NSArray<string> | string[]; });

	initWithTopics(topics: NSArray<string> | string[]): this;
}

declare const enum SCSDKCreativeKitErrorCode {

	Unknown = 0,

	InvalidArgument = 1,

	MainMediaDataReadFailure = 2,

	StickerDataReadFailure = 3,

	EncryptionMetadataReadFailure = 4,

	DeepLinkFailure = 5,

	IllegalState = 6,

	FileTooLarge = 7,

	InvalidFormat = 8,

	CaptionTooLong = 9,

	MalformedURL = 10,

	MissingData = 11,

	None = 12,

	StickerInvalidFormat = 13,

	StickerMissingURL = 14,

	StickerInvalidDimensions = 15,

	LensMissingID = 16,

	VideoTooLong = 17,

	TopicTooLong = 18,

	TopicInvalidCharacter = 19,

	TooManyTopics = 20
}

interface SCSDKCreativeKitModelValidating extends NSObjectProtocol {

	isModelValid(): SCSDKCreativeKitErrorCode;
}
declare var SCSDKCreativeKitModelValidating: {

	prototype: SCSDKCreativeKitModelValidating;
};

declare class SCSDKLensLaunchData extends NSObject {

	static alloc(): SCSDKLensLaunchData; // inherited from NSObject

	static new(): SCSDKLensLaunchData; // inherited from NSObject

	readonly lensLaunchData: string;

	constructor(o: { builder: SCSDKLensLaunchDataBuilder; });

	initWithBuilder(lensBuilder: SCSDKLensLaunchDataBuilder): this;
}

declare class SCSDKLensLaunchDataBuilder extends NSObject {

	static alloc(): SCSDKLensLaunchDataBuilder; // inherited from NSObject

	static new(): SCSDKLensLaunchDataBuilder; // inherited from NSObject

	readonly lensLaunchData: string;

	addNSNumberArrayKeyPairValue(key: string, value: NSArray<number> | number[]): void;

	addNSNumberKeyPairValue(key: string, value: number): void;

	addNSStringArrayKeyPairValue(key: string, value: NSArray<string> | string[]): void;

	addNSStringKeyPairValue(key: string, value: string): void;

	build(): void;
}

declare class SCSDKLensSnapContent extends NSObject implements SCSDKSnapContent {

	static alloc(): SCSDKLensSnapContent; // inherited from NSObject

	static new(): SCSDKLensSnapContent; // inherited from NSObject

	launchData: SCSDKLensLaunchData;

	readonly lensID: string;

	readonly lensUUID: string;

	attachmentUrl: string; // inherited from SCSDKSnapContent

	caption: string; // inherited from SCSDKSnapContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	isPostToSpotlightPermitted: boolean; // inherited from SCSDKSnapContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	sticker: SCSDKSnapSticker; // inherited from SCSDKSnapContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	topics: SCSDKContentTopics; // inherited from SCSDKSnapContent

	readonly  // inherited from NSObjectProtocol

	constructor(o: { lensID: string; });

	constructor(o: { lensUUID: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLensID(lensID: string): this;

	initWithLensUUID(lensUUID: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isModelValid(): SCSDKCreativeKitErrorCode;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SCSDKNoSnapContent extends NSObject implements SCSDKSnapContent {

	static alloc(): SCSDKNoSnapContent; // inherited from NSObject

	static new(): SCSDKNoSnapContent; // inherited from NSObject

	cameraViewState: SCSDKCameraViewState;

	attachmentUrl: string; // inherited from SCSDKSnapContent

	caption: string; // inherited from SCSDKSnapContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	isPostToSpotlightPermitted: boolean; // inherited from SCSDKSnapContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	sticker: SCSDKSnapSticker; // inherited from SCSDKSnapContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	topics: SCSDKContentTopics; // inherited from SCSDKSnapContent

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isModelValid(): SCSDKCreativeKitErrorCode;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SCSDKPhotoSnapContent extends NSObject implements SCSDKSnapContent {

	static alloc(): SCSDKPhotoSnapContent; // inherited from NSObject

	static new(): SCSDKPhotoSnapContent; // inherited from NSObject

	readonly snapPhoto: SCSDKSnapPhoto;

	attachmentUrl: string; // inherited from SCSDKSnapContent

	caption: string; // inherited from SCSDKSnapContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	isPostToSpotlightPermitted: boolean; // inherited from SCSDKSnapContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	sticker: SCSDKSnapSticker; // inherited from SCSDKSnapContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	topics: SCSDKContentTopics; // inherited from SCSDKSnapContent

	readonly  // inherited from NSObjectProtocol

	constructor(o: { snapPhoto: SCSDKSnapPhoto; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSnapPhoto(snapPhoto: SCSDKSnapPhoto): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isModelValid(): SCSDKCreativeKitErrorCode;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SCSDKSnapAPI extends NSObject {

	static alloc(): SCSDKSnapAPI; // inherited from NSObject

	static new(): SCSDKSnapAPI; // inherited from NSObject

	constructor(o: { content: SCSDKSnapContent; });

	cancelSnapping(): void;

	initWithContent(content: SCSDKSnapContent): this;

	startSendingContentCompletionHandler(content: SCSDKSnapContent, completionHandler: (p1: NSError) => void): void;

	startSnappingWithCompletionHandler(completionHandler: (p1: NSError) => void): void;
}

interface SCSDKSnapContent extends SCSDKCreativeKitModelValidating {

	attachmentUrl: string;

	caption: string;

	isPostToSpotlightPermitted: boolean;

	sticker: SCSDKSnapSticker;

	topics: SCSDKContentTopics;
}
declare var SCSDKSnapContent: {

	prototype: SCSDKSnapContent;
};

declare class SCSDKSnapPhoto extends NSObject implements SCSDKCreativeKitModelValidating {

	static alloc(): SCSDKSnapPhoto; // inherited from NSObject

	static new(): SCSDKSnapPhoto; // inherited from NSObject

	readonly image: UIImage;

	readonly imageUrl: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	constructor(o: { imageUrl: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithImage(image: UIImage): this;

	initWithImageUrl(imageUrl: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isModelValid(): SCSDKCreativeKitErrorCode;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SCSDKSnapSticker extends NSObject {

	static alloc(): SCSDKSnapSticker; // inherited from NSObject

	static new(): SCSDKSnapSticker; // inherited from NSObject

	height: number;

	readonly isAnimated: boolean;

	posX: number;

	posY: number;

	rotation: number;

	readonly stickerImage: UIImage;

	readonly stickerUrl: NSURL;

	width: number;

	constructor(o: { stickerImage: UIImage; });

	constructor(o: { stickerUrl: NSURL; isAnimated: boolean; });

	initWithStickerImage(stickerImage: UIImage): this;

	initWithStickerUrlIsAnimated(stickerUrl: NSURL, isAnimated: boolean): this;
}

declare class SCSDKSnapVideo extends NSObject implements SCSDKCreativeKitModelValidating {

	static alloc(): SCSDKSnapVideo; // inherited from NSObject

	static new(): SCSDKSnapVideo; // inherited from NSObject

	readonly videoUrl: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { videoUrl: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithVideoUrl(videoUrl: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isModelValid(): SCSDKCreativeKitErrorCode;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SCSDKVideoSnapContent extends NSObject implements SCSDKSnapContent {

	static alloc(): SCSDKVideoSnapContent; // inherited from NSObject

	static new(): SCSDKVideoSnapContent; // inherited from NSObject

	readonly snapVideo: SCSDKSnapVideo;

	attachmentUrl: string; // inherited from SCSDKSnapContent

	caption: string; // inherited from SCSDKSnapContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	isPostToSpotlightPermitted: boolean; // inherited from SCSDKSnapContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	sticker: SCSDKSnapSticker; // inherited from SCSDKSnapContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	topics: SCSDKContentTopics; // inherited from SCSDKSnapContent

	readonly  // inherited from NSObjectProtocol

	constructor(o: { snapVideo: SCSDKSnapVideo; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSnapVideo(snapVideo: SCSDKSnapVideo): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isModelValid(): SCSDKCreativeKitErrorCode;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}
