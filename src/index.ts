export interface AddonProperties {
    readonly id: string;
    readonly metadata?: AddonMetadata;
    readonly header: AddonHeader;
    readonly minecraftDependencies?: MinecraftDependency[];
    readonly dependencies?: AddonDependencies;
    readonly optionalDependencies?: AddonDependencies;
    readonly peerDependencies?: AddonDependencies;
    readonly tags?: readonly SupportedTagType[];
}

export interface AddonMetadata {
    readonly authors?: readonly string[];
    readonly url?: string;
    readonly license?: string;
}

export interface AddonHeader {
    readonly name: string;
    readonly description: string;
    readonly version: SemVer;
    readonly min_engine_version: EngineVersion;
}

export interface SemVer {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    readonly prerelease?: string;
    readonly build?: string;
}

export interface EngineVersion {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
}

export interface MinecraftDependency {
    readonly module_name: MinecraftModuleType;
    readonly version: string;
}

export interface AddonDependencies {
    readonly [addonId: string]: string;
}

type MinecraftModuleType =
    | "@minecraft/server"
    | "@minecraft/server-ui"
    | "@minecraft/server-gametest"
    | "@minecraft/server-editor"
    | "@minecraft/server-editor-private-bindings"
    | "@minecraft/server-net"
    | "@minecraft/server-admin"
    | "@minecraft/debug-utilities"
    | "@minecraft/diagnostics"
    | "@minecraft/server-graphics";

export enum MinecraftModule {
    Server = "@minecraft/server",
    ServerUi = "@minecraft/server-ui",
    ServerGameTest = "@minecraft/server-gametest",
    ServerEditor = "@minecraft/server-editor",
    ServerEditorPrivateBindings = "@minecraft/server-editor-private-bindings",
    ServerNet = "@minecraft/server-net",
    ServerAdmin = "@minecraft/server-admin",
    DebugUtilities = "@minecraft/debug-utilities",
    Diagnostics = "@minecraft/diagnostics",
    ServerGraphics = "@minecraft/server-graphics",
}

type SupportedTagType = "official" | "approved" | "stable" | "experimental";

export enum SupportedTag {
    Official = "official",
    Approved = "approved",
    Stable = "stable",
    Experimental = "experimental",
}
