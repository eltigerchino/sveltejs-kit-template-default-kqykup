<script lang="ts">
	import enumMeta from "$lib/assets/meta.json";
  import { getProxiedMeta, getProxiedMetaWithClone } from '$lib/utils'

  let useProxied = $state(false)
  let useProxiedWithClone = $state(false)
</script>


<p><strong>enumMeta['enumMeta']['MIXED_MODULE'].codeName:</strong> {enumMeta['enumMeta']['MIXED_MODULE'].codeName}</p>

<p>The following works 
<button onclick={() => useProxiedWithClone = true}>Click me</button></p>


{#if useProxiedWithClone} 
  <p><strong>enumMeta['enumMeta']['MIXED_MODULE'].codeName:</strong> {enumMeta['enumMeta']['MIXED_MODULE'].codeName}</p>
  <p><strong>getProxiedMetaWithClone()['MIXED_MODULE'].codeName: </strong> {getProxiedMetaWithClone()['MIXED_MODULE'].codeName}</p>
{/if}

<p>The following replaces the imported meta.json 
  <button onclick={() => useProxied = true}>Click me</button>
</p>


{#if useProxied} 
  <p><strong>enumMeta['enumMeta']['MIXED_MODULE'].codeName:</strong> {enumMeta['enumMeta']['MIXED_MODULE'].codeName}</p>
  <p><strong>getProxiedMeta()['MIXED_MODULE'].codeName: </strong> {getProxiedMeta()['MIXED_MODULE'].codeName}</p>
{/if}
