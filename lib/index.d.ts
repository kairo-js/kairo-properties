interface AddonProperties {
    readonly id: string;
    readonly metadata?: AddonMetadata;
    readonly header: AddonHeader;
    readonly minecraftDependencies?: MinecraftDependency[];
    readonly dependencies?: AddonDependencies;
    readonly optionalDependencies?: AddonDependencies;
    readonly peerDependencies?: AddonDependencies;
    readonly tags?: SupportedTagType[];
}
interface AddonMetadata {
    readonly authors?: string[];
    readonly url?: string;
    readonly license?: string;
}
interface AddonHeader {
    readonly name: string;
    readonly description: string;
    readonly version: SemVer;
    readonly min_engine_version: EngineVersion;
}
interface SemVer {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    readonly prerelease?: string;
    readonly build?: string;
}
interface EngineVersion {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
}
interface MinecraftDependency {
    readonly module_name: MinecraftModuleType;
    readonly version: string;
}
interface AddonDependencies {
    readonly [addonId: string]: string;
}
type MinecraftModuleType = "@minecraft/server" | "@minecraft/server-ui" | "@minecraft/server-gametest" | "@minecraft/server-editor" | "@minecraft/server-editor-private-bindings" | "@minecraft/server-net" | "@minecraft/server-admin" | "@minecraft/debug-utilities" | "@minecraft/diagnostics" | "@minecraft/server-graphics";
declare enum MinecraftModule {
    Server = "@minecraft/server",
    ServerUi = "@minecraft/server-ui",
    ServerGameTest = "@minecraft/server-gametest",
    ServerEditor = "@minecraft/server-editor",
    ServerEditorPrivateBindings = "@minecraft/server-editor-private-bindings",
    ServerNet = "@minecraft/server-net",
    ServerAdmin = "@minecraft/server-admin",
    DebugUtilities = "@minecraft/debug-utilities",
    Diagnostics = "@minecraft/diagnostics",
    ServerGraphics = "@minecraft/server-graphics"
}
type SupportedTagType = "official" | "approved" | "stable" | "experimental";
declare enum SupportedTag {
    Official = "official",
    Approved = "approved",
    Stable = "stable",
    Experimental = "experimental"
}

export { type AddonDependencies, type AddonHeader, type AddonMetadata, type AddonProperties, type EngineVersion, type MinecraftDependency, MinecraftModule, type SemVer, SupportedTag };
