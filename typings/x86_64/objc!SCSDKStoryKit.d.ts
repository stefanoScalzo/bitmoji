
declare class SCSDKStoryKitAppStory extends NSObject implements NSCoding, NSCopying {

	static alloc(): SCSDKStoryKitAppStory; // inherited from NSObject

	static new(): SCSDKStoryKitAppStory; // inherited from NSObject

	readonly snaps: NSArray<SCSDKStoryKitSnap>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { snaps: NSArray<SCSDKStoryKitSnap> | SCSDKStoryKitSnap[]; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithSnaps(snaps: NSArray<SCSDKStoryKitSnap> | SCSDKStoryKitSnap[]): this;
}

interface SCSDKStoryKitLoadingView extends NSCopying {

	contentSize(): CGSize;

	reset(): void;

	startAnimating(): void;

	stopAnimating(): void;
}
declare var SCSDKStoryKitLoadingView: {

	prototype: SCSDKStoryKitLoadingView;
};

declare class SCSDKStoryKitSession extends NSObject {

	static alloc(): SCSDKStoryKitSession; // inherited from NSObject

	static new(): SCSDKStoryKitSession; // inherited from NSObject

	beginPrefetchingSnap(snap: SCSDKStoryKitSnap): void;

	cancelAllPrefetches(): void;

	cancelPrefetchingSnap(snap: SCSDKStoryKitSnap): void;

	createStoryPlayerWithConfigurationDelegateErrorDelegate(configuration: SCSDKStoryKitStoryPlayerConfig, delegate: SCSDKStoryKitStoryPlayerDelegate, errorDelgate: SCSDKStoryKitStoryPlayerErrorDelegate): SCSDKStoryKitStoryPlayer;

	userHasLoggedOut(): void;
}

declare class SCSDKStoryKitSnap extends NSObject implements NSCoding, NSCopying {

	static alloc(): SCSDKStoryKitSnap; // inherited from NSObject

	static imageWithSnapInfoImageInfo(snapInfo: SCSDKStoryKitSnapInfo, imageInfo: SCSDKStoryKitSnapImageInfo): SCSDKStoryKitSnap;

	static new(): SCSDKStoryKitSnap; // inherited from NSObject

	static videoWithSnapInfoVideoInfo(snapInfo: SCSDKStoryKitSnapInfo, videoInfo: SCSDKStoryKitSnapVideoInfo): SCSDKStoryKitSnap;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	matchVideoImage(videoMatchHandler: (p1: SCSDKStoryKitSnapInfo, p2: SCSDKStoryKitSnapVideoInfo) => void, imageMatchHandler: (p1: SCSDKStoryKitSnapInfo, p2: SCSDKStoryKitSnapImageInfo) => void): void;
}

declare class SCSDKStoryKitSnapImageInfo extends NSObject implements NSCoding, NSCopying {

	static alloc(): SCSDKStoryKitSnapImageInfo; // inherited from NSObject

	static new(): SCSDKStoryKitSnapImageInfo; // inherited from NSObject

	readonly durationInSecs: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { durationInSecs: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithDurationInSecs(durationInSecs: number): this;
}

declare class SCSDKStoryKitSnapInfo extends NSObject implements NSCoding, NSCopying {

	static alloc(): SCSDKStoryKitSnapInfo; // inherited from NSObject

	static new(): SCSDKStoryKitSnapInfo; // inherited from NSObject

	readonly encryptionIv: string;

	readonly encryptionKey: string;

	readonly ownerExternalId: string;

	readonly snapId: string;

	readonly url: NSURL;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { snapId: string; url: NSURL; encryptionKey: string; encryptionIv: string; ownerExternalId: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithSnapIdUrlEncryptionKeyEncryptionIvOwnerExternalId(snapId: string, url: NSURL, encryptionKey: string, encryptionIv: string, ownerExternalId: string): this;
}

declare class SCSDKStoryKitSnapVideoInfo extends NSObject implements NSCoding, NSCopying {

	static alloc(): SCSDKStoryKitSnapVideoInfo; // inherited from NSObject

	static new(): SCSDKStoryKitSnapVideoInfo; // inherited from NSObject

	readonly shouldLoop: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { shouldLoop: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithShouldLoop(shouldLoop: boolean): this;
}

declare class SCSDKStoryKitStoryPlayer extends NSObject {

	static alloc(): SCSDKStoryKitStoryPlayer; // inherited from NSObject

	static new(): SCSDKStoryKitStoryPlayer; // inherited from NSObject

	muted: boolean;

	readonly viewer: UIViewController;

	currentSnapIndexPath(): NSIndexPath;

	goToNextSnap(): void;

	goToPreviousSnap(): void;
}

declare class SCSDKStoryKitStoryPlayerConfig extends NSObject implements NSCoding, NSCopying {

	static alloc(): SCSDKStoryKitStoryPlayerConfig; // inherited from NSObject

	static new(): SCSDKStoryKitStoryPlayerConfig; // inherited from NSObject

	readonly appStory: SCSDKStoryKitAppStory;

	readonly loadingView: UIView;

	readonly shouldAspectFillMedia: boolean;

	readonly shouldShowLeftTapOverlay: boolean;

	readonly shouldUseSnapThumbnail: boolean;

	readonly thumbnail: SCSDKStoryKitThumbnail;

	constructor(o: { appStory: SCSDKStoryKitAppStory; thumbnail: SCSDKStoryKitThumbnail; loadingView: UIView; shouldUseSnapThumbnail: boolean; shouldShowLeftTapOverlay: boolean; shouldAspectFillMedia: boolean; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithAppStoryThumbnailLoadingViewShouldUseSnapThumbnailShouldShowLeftTapOverlayShouldAspectFillMedia(appStory: SCSDKStoryKitAppStory, thumbnail: SCSDKStoryKitThumbnail, loadingView: UIView, shouldUseSnapThumbnail: boolean, shouldShowLeftTapOverlay: boolean, shouldAspectFillMedia: boolean): this;

	initWithCoder(coder: NSCoder): this;
}

interface SCSDKStoryKitStoryPlayerDelegate extends NSObjectProtocol {

	playerDidEndDisplayingSnapAtIndexPath?(player: SCSDKStoryKitStoryPlayer, snap: SCSDKStoryKitSnap, indexPath: NSIndexPath): void;

	playerDidStartDisplayingSnapAtIndexPath?(player: SCSDKStoryKitStoryPlayer, snap: SCSDKStoryKitSnap, indexPath: NSIndexPath): void;

	playerDidTransitionToNextSnapOnAutoProgressionAtIndexPath?(player: SCSDKStoryKitStoryPlayer, snap: SCSDKStoryKitSnap, indexPath: NSIndexPath): void;

	playerDidTransitionToNextSnapOnUserInputAtIndexPath?(player: SCSDKStoryKitStoryPlayer, snap: SCSDKStoryKitSnap, indexPath: NSIndexPath): void;

	playerDidTransitionToPreviousSnapOnUserInputAtIndexPath?(player: SCSDKStoryKitStoryPlayer, snap: SCSDKStoryKitSnap, indexPath: NSIndexPath): void;
}
declare var SCSDKStoryKitStoryPlayerDelegate: {

	prototype: SCSDKStoryKitStoryPlayerDelegate;
};

interface SCSDKStoryKitStoryPlayerErrorDelegate extends NSObjectProtocol {

	playerSnapIndexPathEncounteredError(player: SCSDKStoryKitStoryPlayer, snap: SCSDKStoryKitSnap, indexPath: NSIndexPath, error: NSError): void;
}
declare var SCSDKStoryKitStoryPlayerErrorDelegate: {

	prototype: SCSDKStoryKitStoryPlayerErrorDelegate;
};

declare class SCSDKStoryKitThumbnail extends NSObject implements NSCoding, NSCopying {

	static alloc(): SCSDKStoryKitThumbnail; // inherited from NSObject

	static new(): SCSDKStoryKitThumbnail; // inherited from NSObject

	readonly image: UIImage;

	readonly placeholderImage: UIImage;

	readonly url: NSURL;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { image: UIImage; placeholderImage: UIImage; url: NSURL; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithImagePlaceholderImageUrl(image: UIImage, placeholderImage: UIImage, url: NSURL): this;
}

declare var SCSDKStoryKitVersionNumber: number;

declare var SCSDKStoryKitVersionString: interop.Reference<number>;
