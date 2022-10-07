<?php
/**
 * Accordion block.
 */

/**
 * This index is key to keeping things accessible,
 * and having unique Aria assignments.
 */
$i                  = 0;
$a11y_id            = substr( $block['id'], -6 );
$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => 'accordion'
	]
);
?>

<div id="<?php echo $block['id']; ?>" <?php echo $wrapper_attributes; ?>>
	<?php 
	foreach ( get_field( 'accordion_item' ) as $accordion_item ) :
		$heading = $accordion_item['accordion_heading'] ? $accordion_item['accordion_heading'] : 'Your heading goes here';
		$content = $accordion_item['accordion_content'] ? $accordion_item['accordion_content'] : 'Your content goes here...';
		?>
		<h3 class="accordion-heading">
			<button type="button"
					aria-expanded="<?php echo ( $i === 0 ) ? 'true' : 'false'; ?>"
					class="accordion-trigger"
					aria-controls="accordion-section-<?php echo $i . '-' . $a11y_id; ?>"
					id="accordion-<?php echo $i . '-' . $a11y_id; ?>">
				<span class="accordion-title">
					<?php echo esc_html( $heading ); ?>
					<span class="accordion-icon"></span>
				</span>
			</button>
		</h3><!-- .accordion-heading -->

		<div id="accordion-section-<?php echo $i . '-' . $a11y_id; ?>"
			role="region"
			aria-labelledby="accordion-<?php echo $i . '-' . $a11y_id; ?>"
			class="accordion-panel"
			<?php echo ( $i !== 0 ) ? 'hidden' : ''; ?>>
			<div class="accordion-content">
				<?php echo $content; ?>
			</div><!-- .accordion-content -->
		</div><!-- .accordion-section-<?php echo $i . '-' . $a11y_id; ?> -->

		<?php
		$i++;
		endforeach;
	?>
</div><!-- .accordion -->
