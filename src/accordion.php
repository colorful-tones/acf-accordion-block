<?php
/**
 * Accordion block.
 */

/**
 * This index is key to keeping things accessible,
 * and having unique Aria assignments.
 */
$i = 0;
$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => 'accordion'
	]
);
?>

<div <?php echo $wrapper_attributes; ?>>
	<?php foreach ( get_field( 'accordion_item' ) as $accordion_item ) : ?>
		<h3 class="accordion-heading">
			<button type="button"
					aria-expanded="<?php echo ( $i === 0 ) ? 'true' : 'false'; ?>"
					class="accordion-trigger"
					aria-controls="accordion-section-<?php echo $i; ?>"
					id="accordion-<?php echo $i; ?>">
				<span class="accordion-title">
					<?php echo $accordion_item['accordion_heading']; ?>
					<span class="accordion-icon"></span>
				</span>
			</button>
		</h3><!-- .accordion-heading -->

		<div id="accordion-section-<?php echo $i; ?>"
			role="region"
			aria-labelledby="accordion-<?php echo $i; ?>"
			class="accordion-panel"
			<?php echo ( $i !== 0 ) ? 'hidden' : ''; ?>>
			<div class="accordion-content">
				<?php echo $accordion_item['accordion_content']; ?>
			</div><!-- .accordion-content -->
		</div><!-- .accordion-section-<?php echo $i; ?> -->

		<?php
		$i++;
		endforeach;
	?>
</div><!-- .accordion -->
