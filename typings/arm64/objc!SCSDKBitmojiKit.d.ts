
declare class SCSDKBitmojiClient extends NSObject {

	static alloc(): SCSDKBitmojiClient; // inherited from NSObject

	static fetchAvatarURLWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	static new(): SCSDKBitmojiClient; // inherited from NSObject
}

declare class SCSDKBitmojiIconView extends UIView {

	static alloc(): SCSDKBitmojiIconView; // inherited from NSObject

	static appearance(): SCSDKBitmojiIconView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SCSDKBitmojiIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SCSDKBitmojiIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SCSDKBitmojiIconView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SCSDKBitmojiIconView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SCSDKBitmojiIconView; // inherited from UIAppearance

	static new(): SCSDKBitmojiIconView; // inherited from NSObject

	defaultImage: UIImage;
}

declare class SCSDKBitmojiStickerPickerConfig extends NSObject {

	static alloc(): SCSDKBitmojiStickerPickerConfig; // inherited from NSObject

	static new(): SCSDKBitmojiStickerPickerConfig; // inherited from NSObject

	readonly showSearchBar: boolean;

	readonly showSearchPills: boolean;

	readonly theme: SCSDKBitmojiStickerPickerTheme;
}

declare class SCSDKBitmojiStickerPickerConfigBuilder extends NSObject {

	static alloc(): SCSDKBitmojiStickerPickerConfigBuilder; // inherited from NSObject

	static new(): SCSDKBitmojiStickerPickerConfigBuilder; // inherited from NSObject

	build(): SCSDKBitmojiStickerPickerConfig;

	withShowSearchBar(showSearchBar: boolean): this;

	withShowSearchPills(showSearchPills: boolean): this;

	withTheme(theme: SCSDKBitmojiStickerPickerTheme): this;
}

declare const enum SCSDKBitmojiStickerPickerSearchMode {

	SearchResultOnly = 0,

	PrependSearchResult = 1
}

declare class SCSDKBitmojiStickerPickerTheme extends NSObject {

	static alloc(): SCSDKBitmojiStickerPickerTheme; // inherited from NSObject

	static new(): SCSDKBitmojiStickerPickerTheme; // inherited from NSObject

	readonly backgroundColor: UIColor;

	readonly borderColor: UIColor;

	readonly errorRed: UIColor;

	readonly navIconColor: UIColor;

	readonly searchColor: UIColor;

	readonly searchPillColors: NSArray<UIColor>;

	readonly searchPillShadowColor: UIColor;

	readonly searchPillTextColor: UIColor;

	readonly shouldRandomizeSearchPillColors: boolean;

	readonly subtextColor: UIColor;

	readonly titleTextColor: UIColor;

	static readonly darkTheme: SCSDKBitmojiStickerPickerTheme;

	static readonly lightTheme: SCSDKBitmojiStickerPickerTheme;

	toBuilder(): SCSDKBitmojiStickerPickerThemeBuilder;
}

declare class SCSDKBitmojiStickerPickerThemeBuilder extends NSObject {

	static alloc(): SCSDKBitmojiStickerPickerThemeBuilder; // inherited from NSObject

	static new(): SCSDKBitmojiStickerPickerThemeBuilder; // inherited from NSObject

	build(): SCSDKBitmojiStickerPickerTheme;

	withBackgroundColor(backgroundColor: UIColor): this;

	withBorderColor(borderColor: UIColor): this;

	withErrorRed(errorRed: UIColor): this;

	withNavIconColor(navIconColor: UIColor): this;

	withSearchColor(searchColor: UIColor): this;

	withSearchPillColors(searchPillColors: NSArray<UIColor> | UIColor[]): this;

	withSearchPillShadowColor(searchPillShadowColor: UIColor): this;

	withSearchPillTextColor(searchPillTextColor: UIColor): this;

	withShouldRandomizeSearchPillColors(shouldRandomizeSearchPillColors: boolean): this;

	withSubtextColor(subtextColor: UIColor): this;

	withTitleTextColor(titleTextColor: UIColor): this;
}

declare class SCSDKBitmojiStickerPickerViewController extends UIViewController {

	static alloc(): SCSDKBitmojiStickerPickerViewController; // inherited from NSObject

	static new(): SCSDKBitmojiStickerPickerViewController; // inherited from NSObject

	delegate: SCSDKBitmojiStickerPickerViewControllerDelegate;

	constructor(o: { config: SCSDKBitmojiStickerPickerConfig; });

	attachBitmojiIcon(bitmojiIcon: SCSDKBitmojiIconView): void;

	initWithConfig(config: SCSDKBitmojiStickerPickerConfig): this;

	removeBitmojiIcon(bitmojiIcon: SCSDKBitmojiIconView): void;

	setFriendUserId(friendUserId: string): void;

	setSearchTermSearchMode(text: string, searchMode: SCSDKBitmojiStickerPickerSearchMode): void;
}

interface SCSDKBitmojiStickerPickerViewControllerDelegate extends NSObjectProtocol {

	bitmojiStickerPickerViewControllerDidSelectBitmojiWithURLImage(stickerPickerViewController: SCSDKBitmojiStickerPickerViewController, bitmojiURL: string, image: UIImage): void;

	bitmojiStickerPickerViewControllerDidSelectSearchTag?(stickerPickerViewController: SCSDKBitmojiStickerPickerViewController): void;

	bitmojiStickerPickerViewControllerSearchFieldFocusDidChangeWithFocus?(stickerPickerViewController: SCSDKBitmojiStickerPickerViewController, hasFocus: boolean): void;
}
declare var SCSDKBitmojiStickerPickerViewControllerDelegate: {

	prototype: SCSDKBitmojiStickerPickerViewControllerDelegate;
};

declare var kSCSDKBitmojiClientRequiredScope: string;
